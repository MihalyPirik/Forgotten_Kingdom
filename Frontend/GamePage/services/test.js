import {
  getAllData,
  getInventory,
  getQuests,
  getQuestsIsActive,
  putPlayer,
  deletePlayer,
} from "./playerService.js";
import {
  getAllEnemies,
  getBlockEnemies,
  postEnemy,
  putEnemy,
  deleteEnemy,
} from "./enemyService.js";

// GET

// const playerDatas=await getAllData("22f13800-d165-11ee-bd96-8fe2447f8a0c");
// const playerInventory=await getInventory("22f13800-d165-11ee-bd96-8fe2447f8a0c");
// const playerQuests=await getQuests("22f13800-d165-11ee-bd96-8fe2447f8a0c");
// const playerQuestsIsActive=await getQuestsIsActive("22f13800-d165-11ee-bd96-8fe2447f8a0c", "false"); // true or false
// const allEnemies=await getAllEnemies("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d");
// const allBlockEnemies=await getBlockEnemies("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", 1, 1);

// POST

const postEnemyData = {
  objX: 1,
  objY: 1,
  blockX: 1,
  blockY: 1,
  world_id: "9acd3892-d9ff-11ee-b1e4-00155ddb1e0d",
  enemy_type_id: "e880a06c-c59c-11ee-b1e4-00155ddb1e0d",
};

// const enemyPost = await postEnemy("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", postEnemyData);

// PUT

const playerData = {
  player_name: "teszt5",
  email: "teszt1@teszt.hu",
  password: "0123456789",
};

const enemyData = {
  objX: 10,
  objY: 10,
  blockX: 10,
  blockY: 10,
  world_id: "9acd3892-d9ff-11ee-b1e4-00155ddb1e0d",
  enemy_type_id: "e880a06c-c59c-11ee-b1e4-00155ddb1e0d",
};
// const playerPut=await putPlayer("22f13800-d165-11ee-bd96-8fe2447f8a0c", playerData);
// const enemyPut = await putEnemy("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", "3a0cd1d0-c6ab-11ee-89ed-d1ee0bfade20", enemyData);

// DELETE

// const playerDelete=await deletePlayer("22078630-d163-11ee-a5af-5f436c65ebb1");
// const enemyDelete=await deleteEnemy("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", "81d1ac79-da01-11ee-b1e4-00155ddb1e0d");



// console.log(enemyPost);