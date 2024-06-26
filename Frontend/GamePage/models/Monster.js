import { putEnemy } from "../../services/enemyService.js";
import { GameView } from "../views/view.js";
import { Entity } from "./Entity.js";

export class Monster extends Entity {
  #hp = null;
  constructor(
    id = undefined,
    name,
    game,
    sprite,
    objX,
    objY,
    HP,
    attack,
    level,
    speed
  ) {
    super(game, sprite, objX, objY, game.width * 0.1, game.height * 0.1);
    this.name = name;
    this.radius = game.width * 0.03;
    this.speed = speed;
    this.HP = HP;
    this.#hp = HP;
    this.attack = { timer: 0, attack: attack, interval: 60 };
    this.level = level;
    this.knockedBack = false;
    this.id = id;
    this.noticeRadius = 100;
    this.attackRadius = 60;
  }

  set HP(value) {
    if (value <= 0) {
      this.isDead = true;
    }
    this.#hp = value;
    GameView.BindMonsterHP(this);
    putEnemy(this.id, { HP: value });
  }
  get HP() {
    return this.#hp;
  }
  NoticePlayer() {
    if (
      Math.abs(this.objX - this.game.player.objX) < this.noticeRadius &&
      Math.abs(this.objY - this.game.player.objY) < this.noticeRadius
    ) {
      return true;
    }
    return false;
  }

  Attack(player) {
    if (this.NoticePlayer()) {
      if (
        Math.abs(player.objX - this.objX) < this.attackRadius &&
        Math.abs(player.objY - this.objY) < this.attackRadius
      ) {
        this.isAttack = true;
        if (this.attack.timer > this.attack.interval) {
          this.attack.timer = 0;
          return true;
        }
        this.attack.timer++;
      } else {
        this.isAttack = false;
      }
    }
    return false;
  }
}
