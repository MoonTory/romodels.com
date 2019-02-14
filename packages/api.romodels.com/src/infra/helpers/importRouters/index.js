import { readdirSync, statSync } from 'fs';
import path, { join } from 'path';

export const importRouters = async () => {
  try {
    const modules = await getModules('src/interfaces/routers/');

    const routers = [];

    modules.forEach(routerURI => {
      let dirPath = 'src/interfaces/routers/' + routerURI;

      let routerPath = path.resolve(dirPath);
      let Router = require(routerPath);

      let router = new Router.default(routerURI);

      routers.push(router);
    });

    return routers;
  } catch (error) {
    throw error;
  }
};

// Helper function to get directory names from a specified path
// @params -> pathName: string
// Provide a pathName in string format to the directory in which you want to parse the folders of.

const getModules = pathName => readdirSync(pathName).filter(dirName => statSync(join(pathName, dirName)).isDirectory());
