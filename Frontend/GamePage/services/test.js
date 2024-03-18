import { getAllData, getInventory, getQuests, putPlayer, deletePlayer } from "./playerService.js";
import { getAllEnemies, getBlockEnemies, postEnemy, putEnemy, deleteEnemy } from "./enemyService.js";
import { getAllResidents, getBlockResidents, postResident, putResident } from "./residentService.js";
import { getAllOffer, getPlayerOffer, postOffer, putOffer, deleteOffer } from "./marketService.js";
import { getAllBuilding, postBuilding, putBuilding, deleteBuilding } from "./buildingService.js";

// GET

const playerDatas=await getAllData();
// const playerInventory=await getInventory();
// const playerQuests=await getQuests();
// const allEnemies=await getAllEnemies();
// const allBlockEnemies=await getBlockEnemies(1, 1);
// const allResidents=await getAllResidents();
// const allBlockResidents=await getBlockResidents(0, 0);
// const allOffer=await getAllOffer();
// const allPlayerOffer=await getPlayerOffer();
// const allBuilding=await getAllBuilding();

// POST

const postEnemyData = {
  objX: 1,
  objY: 1,
  blockX: 1,
  blockY: 1,
  enemy_type_id: "e880a06c-c59c-11ee-b1e4-00155ddb1e0d"
};

const postResidentData = {
  objX: 10,
  objY: 10,
  blockX: 10,
  blockY: 10,
  resident_name: "Long Boo2",
  profession: "asd",
  quest_id: "9d1d2943-c695-11ee-b1e4-00155ddb1e0d"
};

const postOfferData = {
    offeredType: "fa",
    offeredAmount: 200,
    soughtType: "kő",
    soughtAmount: 100
}

// const enemyPost = await postEnemy(postEnemyData);
// const residentPost = await postResident(postResidentData);
// const offerPost = await postOffer(postOfferData);

// PUT

const playerData = {
  player_name: "asd",
  money: 1000,
  world_name: "First",
  stone: 5000,
  wood: 200,
  coal: 200,
  iron: 200,
  wheat: 200,
  fish: 200,
  objX: 10,
  objY: 10,
  blockX: 10,
  blockY: 10
};

const enemyData = {
  objX: 10,
  objY: 10,
  blockX: 10,
  blockY: 10,
  enemy_type_id: "e880a06c-c59c-11ee-b1e4-00155ddb1e0d"
};

const putResidentData = {
  objX: 10,
  objY: 10,
  blockX: 10,
  blockY: 10,
  resident_name: "Long Boo10",
  profession: "asd",
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

// const playerPut=await putPlayer(playerData);
// const enemyPut = await putEnemy("3a0cd1d0-c6ab-11ee-89ed-d1ee0bfade20", enemyData);
// const residentPut = await putResident("4f47b820-da16-11ee-b103-65f4d5d03d6e", putResidentData);
// const offerPut = await putOffer("f4a61ab0-d623-11ee-8a3b-533566130e3c", putOfferData);
// const buildingPut = await putBuilding("552cf0de-da0b-11ee-b1e4-00155ddb1e0d", putBuildingData);



// DELETE

// const playerDelete=await deletePlayer();
// const enemyDelete=await deleteEnemy("81d1ac79-da01-11ee-b1e4-00155ddb1e0d");
// const offerDelete=await deleteOffer("f4a61ab0-d623-11ee-8a3b-533566130e3c");


console.log("Results_______________________________________");
console.log(playerDatas);
// console.log(playerInventory);
// console.log(playerQuests);
// console.log(playerQuestsIsActive);
// console.log(allEnemies);
// console.log(allEnemies);
// console.log(allBlockEnemies);
// console.log(allResidents);
// console.log(allBlockResidents);
// console.log(allOffer);
// console.log(allPlayerOffer);
// console.log(allBuilding);
// console.log(enemyPost);
// console.log(residentPost);
// console.log(offerPost);
// console.log(playerPut);
// console.log(enemyPut);
// console.log(residentPut);
// console.log(offerPut);
// console.log(buildingPut);
// console.log(playerDelete);
// console.log(enemyDelete);
// console.log(offerDelete);

