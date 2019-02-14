import path from 'path';

export const importController = async modules => {
  try {
    const controllers = [];

    modules.forEach(controllerUri => {
      let controllerPath = path.resolve('src/interfaces/controllers/', controllerUri);
      let controller = require(controllerPath);

      controllers.push(controller);
    });

    return controllers;
  } catch (error) {
    throw error;
  }
};
