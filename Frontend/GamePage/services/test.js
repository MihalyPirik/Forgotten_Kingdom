import { getAllData, getInventory, getQuests, getQuestsIsActive, putPlayer, deletePlayer } from "./playerService.js";
import { getAllEnemies, getBlockEnemies, postEnemy, putEnemy, deleteEnemy } from "./enemyService.js";
import { getAllResidents, getBlockResidents, postResident, putResident } from "./residentService.js";
import { getAllOffer, getPlayerOffer, postOffer, putOffer, deleteOffer } from "./marketService.js";
import { getAllBuilding, putBuilding } from "./buildingService.js";

// GET

// const playerDatas=await getAllData("22f13800-d165-11ee-bd96-8fe2447f8a0c");
// const playerInventory=await getInventory("22f13800-d165-11ee-bd96-8fe2447f8a0c");
// const playerQuests=await getQuests("22f13800-d165-11ee-bd96-8fe2447f8a0c");
// const playerQuestsIsActive=await getQuestsIsActive("22f13800-d165-11ee-bd96-8fe2447f8a0c", "false"); // true or false
// const allEnemies=await getAllEnemies("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d");
// const allBlockEnemies=await getBlockEnemies("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", 1, 1);
// const allResidents=await getAllResidents("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d");
// const allBlockResidents=await getBlockResidents("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", 0, 0);
// const allOffer=await getAllOffer();
// const allPlayerOffer=await getPlayerOffer("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d");
// const allBuilding=await getAllBuilding("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d");

// POST

const postEnemyData = {
  objX: 1,
  objY: 1,
  blockX: 1,
  blockY: 1,
  world_id: "9acd3892-d9ff-11ee-b1e4-00155ddb1e0d",
  enemy_type_id: "e880a06c-c59c-11ee-b1e4-00155ddb1e0d",
};

const postResidentData = {
  objX: 10,
  objY: 10,
  blockX: 10,
  blockY: 10,
  resident_name: "Long Boo2",
  profession: "asd",
  world_id: "9acd3892-d9ff-11ee-b1e4-00155ddb1e0d",
  quest_id: "9d1d2943-c695-11ee-b1e4-00155ddb1e0d"
};

const postOfferData = {
    offeredType: "fa",
    offeredAmount: 200,
    soughtType: "kő",
    soughtAmount: 100,
    player_id: "9acd3892-d9ff-11ee-b1e4-00155ddb1e0d"
}

// const enemyPost = await postEnemy("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", postEnemyData);
// const residentPost = await postResident("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", postResidentData);
// const offerPost = await postOffer("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", postOfferData);

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

const putResidentData = {
  objX: 10,
  objY: 10,
  blockX: 10,
  blockY: 10,
  resident_name: "Long Boo10",
  profession: "asd",
  world_id: "9acd3892-d9ff-11ee-b1e4-00155ddb1e0d",
  quest_id: "9d1d2943-c695-11ee-b1e4-00155ddb1e0d"
};

const putOfferData = {
    offeredType: "fa",
    offeredAmount: 5000,
    soughtType: "kő",
    soughtAmount: 5000
}

const putBuildingData = {
  "level": 1
}

// const playerPut=await putPlayer("22f13800-d165-11ee-bd96-8fe2447f8a0c", playerData);
// const enemyPut = await putEnemy("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", "3a0cd1d0-c6ab-11ee-89ed-d1ee0bfade20", enemyData);
// const residentPut = await putResident("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", "4f47b820-da16-11ee-b103-65f4d5d03d6e", putResidentData);
// const offerPut = await putOffer("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", "f4a61ab0-d623-11ee-8a3b-533566130e3c", putOfferData);
// const buildingPut = await putBuilding("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", "552cf0de-da0b-11ee-b1e4-00155ddb1e0d", putBuildingData);

// DELETE

// const playerDelete=await deletePlayer("22078630-d163-11ee-a5af-5f436c65ebb1");
// const enemyDelete=await deleteEnemy("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", "81d1ac79-da01-11ee-b1e4-00155ddb1e0d");
// const offerDelete=await deleteOffer("9acd3892-d9ff-11ee-b1e4-00155ddb1e0d", "f4a61ab0-d623-11ee-8a3b-533566130e3c");



console.log(allBuilding);