const { getAllResidents, postResident, putResident } = require('../../Controllers/gameController/residentController');
const { userAuth } = require('../../middlewares/auth');
const {ProcessQuery} = require('../../middlewares/query')
const residentRouter = require('express').Router({ mergeParams: true });

residentRouter.use(userAuth)

residentRouter.get('/', ProcessQuery, getAllResidents);

residentRouter.post('/', postResident);

residentRouter.put('/:resident_id', putResident);

module.exports = residentRouter;