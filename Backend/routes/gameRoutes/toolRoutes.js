const { getTool, postTool, putTool, deleteTool } = require('../../Controllers/gameController/toolController');
const { userAuth } = require('../../middlewares/auth');

const toolRouter = require('express').Router({ mergeParams: true });

// toolRouter.use(userAuth)

toolRouter.get('/', getTool);

toolRouter.post('/', postTool);

toolRouter.put('/:tool_id', putTool)

toolRouter.delete('/:tool_id', deleteTool)

module.exports = toolRouter;