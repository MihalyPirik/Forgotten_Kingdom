import { base } from "./base.js";

// GET

export const getAllTools = () => {
  return base("/tool",'GET')
};

// POST

export const postTool = (data) => {
    return base("/tool", "POST", data)
}

// PUT

export const putTool = (toolId, data) => {
  return base("/tool/" + toolId, "PUT", data)
};

// DELETE

export const deleteTool = (toolId) => {
  return base("/tool/" + toolId, 'DELETE')
};