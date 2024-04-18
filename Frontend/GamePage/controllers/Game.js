import { Monster } from "../models/Monster.js";
import { NPC } from "../models/NPC.js";
import { Player } from "../models/Player.js";
import { Point } from "../models/Point.js";
import { IsometricBlock } from "../models/isometricBlock.js";
import { GameView, PanelView } from "../views/view.js";
import { SpriteController } from "./Sprite.js";
import { Entity } from "../models/Entity.js";
import { putPlayer } from "../../services/playerService.js";
import { deleteEnemy, putEnemy } from "../../services/enemyService.js";
import { ExploringQuests, KillerQuests } from "./Quest.js";

export class GameController {
  #currentBlock;
  constructor(
    isometricBlocks = [[]],
    gameView,
    player = null,
    currentBlock = null,
    panels = []
  ) {
    /**
     * @type {Array<Array<Function>>}
     */
    this.isometricBlocks = isometricBlocks;
    /**
     * @type {GameView}
     */
    this.gameView = gameView;
    this.width = gameView.canvas.width;
    this.height = gameView.canvas.height;
    this.currentBlockX = 0;
    this.currentBlockY = 0;
    this.panels = panels;
    this.fps = 60;
    this.timer = 0;
    this.interval = 1000 / this.fps;
    this.debug = false;
    /**
     * @type {Player}
     */
    this.player = player;
    /**
     * @type {IsometricBlock}
     */
    this.currentBlock = currentBlock;
    this.#currentBlock = currentBlock;
  }
  set currentBlock(value) {
    if (value) {
      for (let i = 0; i < this.isometricBlocks.length; i++) {
        for (let j = 0; j < this.isometricBlocks[i].length; j++) {
          if (this.isometricBlocks[i][j].name == value.name) {
            this.currentBlockX = i;
            this.currentBlockY = j;
            this.player.blockX = i;
            this.player.blockY = j;
            putPlayer({ blockX: i, blockY: j });
            this.#currentBlock = value;
            this.gameView.SetBackGround(value.backGround.src);
            const panels = document.getElementsByClassName("gamePanel");
            for (let i = 0; i < panels.length; i++) {
              panels[i].remove();
            }
            ExploringQuests(i, j, this.player.quests, this.isometricBlocks);
            return;
          }
        }
      }
    }
    if (value != null) {
      throw new ReferenceError(
        "The isometricBlock is not registered in the matrix!"
      );
    }
  }
  get currentBlock() {
    return this.#currentBlock;
  }

  gameLoop(deltaTime) {
    if (this.timer > this.interval) {
      if (this.player.isDead || this.player.isInConversation) {
        return;
      }
      if (this.player.isAction.is) {
        this.gameView.ClearEntity(this.player);
        SpriteController.MovePlayer(this.player);
        this.gameView.RenderEntity(this.player);

        if (this.player.isAction.canExecute) {
          this.player.Action();
          return;
        }
        return;
      }
      this.player.attack.timer++;
      this.gameView.ClearContext();

      let newPlayerPos = SpriteController.MovePlayer(this.player);
      for (const entity of this.currentBlock.entities) {
        let newPos = SpriteController.MoveMonster(entity);
        const playerCollision = Entity.CheckCollision(this.player, entity);
        if (playerCollision) {
          if (entity instanceof Monster) {
            newPos = playerCollision[0];
          }
          if (entity instanceof NPC) {
            newPlayerPos = playerCollision[1];
          } else {
            newPos = playerCollision[0];
            newPlayerPos = playerCollision[1];
          }
        }

        const isAttack = entity.Attack(this.player);
        if (isAttack) {
          this.player.HP -= entity.attack.attack;
          this.gameView.BindPlayerHealth(this.player);
        }
        if (entity.isDead) {
          const index = this.currentBlock.entities.indexOf(entity);
          this.currentBlock.entities.splice(index, 1);
          if (entity instanceof Monster) {
            deleteEnemy(entity.id);
            KillerQuests(
              entity,
              this.player.quests,
              this.currentBlock.isometricBlocks
            );
            this.currentBlock.StartTimeOut(this);
          }
        }

        if (!entity.knockedBack) {
          entity.objX = newPos.x;
          entity.objY = newPos.y;
        }
      }

      for (const barrier of this.currentBlock.barriers) {
        const Iscollison = barrier.CheckCollision(this.player);
        if (Iscollison) {
          newPlayerPos = Iscollison;
          break;
        }
      }
      for (const panel of this.currentBlock.panels) {
        if (panel.IsVisible(this.player)) {
          if (!panel.isVisible) {
            PanelView.ShowPanel(panel, this);
            panel.isVisible = true;
          }
        } else {
          if (panel.isVisible) {
            PanelView.HidePanel(panel);
            panel.isVisible = false;
          }
        }
      }

      for (let i = 0; i < this.currentBlock.entities.length - 1; i++) {
        for (let j = this.currentBlock.entities.length - 1; j > i; j--) {
          const newPos = Entity.CheckCollision(
            this.currentBlock.entities[i],
            this.currentBlock.entities[j]
          );
          if (newPos) {
            this.currentBlock.entities[i].objX = newPos[1].x;
            this.currentBlock.entities[i].objY = newPos[1].y;
            this.currentBlock.entities[j].objX = newPos[0].x;
            this.currentBlock.entities[j].objY = newPos[0].y;
            break;
          }
        }
      }

      this.player.objX = newPlayerPos.x;
      this.player.objY = newPlayerPos.y;
      const s = [...this.currentBlock.entities];
      s.push(this.player);
      s.sort((a, b) => a.objY - b.objY);

      this.currentBlock.panels.forEach((panel) => {
        this.gameView.RenderPanel(panel);
      });
      for (const entity of s) {
        this.gameView.RenderEntity(entity);
      }

      this.timer = 0;
    }
    this.timer += deltaTime;
  }
}
