const { getAllResidents, getResidents, postResident, putResident, deleteResident } = require('../../controllers/gameController/residentController');
const { userAuth } = require('../../middlewares/auth');

const residentRouter = require('express').Router({ mergeParams: true });

// residentRouter.use(userAuth)

residentRouter.get('/', getAllResidents);
residentRouter.get('/:blockX/:blockY', getResidents);

residentRouter.post('/', postResident);

residentRouter.put('/:resident_id', putResident);

residentRouter.delete('/:resident_id', deleteResident);

module.exports = residentRouter;