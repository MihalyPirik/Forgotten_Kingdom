import { getAllData, getInventory, putPlayer, deletePlayer } from "./playerService.js";
import { getAllEnemies, getBlockEnemies, postEnemy, putEnemy, deleteEnemy } from "./enemyService.js";
import { getAllResidents, getBlockResidents, postResident, putResident, deleteResident } from "./residentService.js";
import { getAllOffer, getPlayerOffer, postOffer, putOffer, deleteOffer } from "./marketService.js";
import { getAllBuilding, postBuilding, putBuilding, deleteBuilding } from "./buildingService.js";
import { getQuests, postQuest, putQuest, deleteQuest } from "./questService.js";

// GET

// const playerDatas=await getAllData();
// const playerInventory=await getInventory();
// const allQuests=await getQuests("?withoutZero=0");
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
  blockX: 10,
  blockY: 1,
  enemy_type_id: "895434b0-e5bd-11ee-b1e4-00155ddb1e0d"
};

const postResidentData = {
  objX: 10,
  objY: 10,
  blockX: 10,
  blockY: 10,
  resident_name: "Long Boo2",
  profession: "asd",
  quest_id: "d4348cd6-e5ce-11ee-b1e4-00155ddb1e0d"
};

const postOfferData = {
    offeredType: "fa",
    offeredAmount: 200,
    soughtType: "kő",
    soughtAmount: 100
}

const postBuildingData = {
  "building_type_id": "6b116ed2-e4ed-11ee-b1e4-00155ddb1e0d"
}

// const enemyPost = await postEnemy(postEnemyData);
// const residentPost = await postResident(postResidentData);
// const offerPost = await postOffer(postOfferData);
// const buildingPost = await postBuilding(postBuildingData);

// PUT

const playerData = {
  player_name: "teszt",
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
  enemy_type_id: "895434b0-e5bd-11ee-b1e4-00155ddb1e0d"
};

const putResidentData = {
  objX: 101,
  objY: 101,
  blockX: 101,
  blockY: 101,
  resident_name: "Long Boo10",
  profession: "asd1",
  quest_id: "d4348f06-e5ce-11ee-b1e4-00155ddb1e0d"
};

const putOfferData = {
    offeredType: "fa",
    offeredAmount: 5000,
    soughtType: "kő",
    soughtAmount: 5000
}

const putBuildingData = {
  "level": 5
}

// const playerPut=await putPlayer(playerData);
// const enemyPut = await putEnemy("280f3d70-e5db-11ee-abf5-3913413dc67d", enemyData);
// const residentPut = await putResident("43bad710-e5df-11ee-a229-b50b973e4440", putResidentData);
// const offerPut = await putOffer("e6226150-e5dd-11ee-a229-b50b973e4440", putOfferData);
// const buildingPut = await putBuilding("05ed9660-e513-11ee-836b-c92ba05f69bd", putBuildingData);

// DELETE

// const playerDelete=await deletePlayer();
// const enemyDelete=await deleteEnemy("280f3d70-e5db-11ee-abf5-3913413dc67d");
// const offerDelete=await deleteOffer("e6226150-e5dd-11ee-a229-b50b973e4440");
// const buildingDelete=await deleteBuilding("71df0e64-e4ed-11ee-b1e4-00155ddb1e0d");
// const residentDelete=await deleteResident("43bad710-e5df-11ee-a229-b50b973e4440");


console.log("Results_______________________________________");
// console.log(playerDatas);
// console.log(playerInventory);
// console.log(allQuests);
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
// console.log(buildingPost);
// console.log(playerPut);
// console.log(enemyPut);
// console.log(residentPut);
// console.log(offerPut);
// console.log(buildingPut);
// console.log(playerDelete);
// console.log(enemyDelete);
// console.log(offerDelete);
// console.log(buildingDelete);
// console.log(residentDelete);
