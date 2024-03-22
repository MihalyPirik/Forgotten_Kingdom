const Resident = require("../models/resident")
const uuid = require("uuid");

function SetInitialState(user) {
    Resident.create({
        resident_id: uuid.v1(),
        world_id: user.player_id,
        objX: 10,
        objY: 10,
        blockX: 10,
        blockY: 10,
        resident_name: "Long Boo",
        profession: "asd",
        quest_id: "7e1eb912-ad90-4ad7-86ac-6f60ffb39bd4"
    })
}

module.exports = {SetInitialState};