const { getAllResidents, getResidents, postResident, putResident } = require('../../controllers/gameController/residentController');
const { userAuth } = require('../../middlewares/auth');

const residentRouter = require('express').Router({ mergeParams: true });

// playerRouter.use(userAuth)

residentRouter.get('/', getAllResidents);
residentRouter.get('/:blockX/:blockY', getResidents);

residentRouter.post('/', postResident);

residentRouter.put('/:resident_id', putResident);

module.exports = residentRouter;