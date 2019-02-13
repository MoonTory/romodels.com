import { readdirSync, statSync } from 'fs';
import path, { join } from 'path';

export default async () => {
  try {
    const modules = await dirs('src/interfaces/routers/');

    const routers = [];

    modules.forEach(routerURI => {
      let dirPath = 'src/interfaces/routers/' + routerURI;

      let routerPath = path.resolve(dirPath);
      let router = require(routerPath);

      routers.push(router);
    });

    return routers;
  } catch (error) {
    throw error;
  }
};

// var _getAllFilesFromFolder = function(dir) {
//   var filesystem = require('fs');
//   var results = [];

//   filesystem.readdirSync(dir).forEach(function(file) {
//     file = dir + '/' + file;
//     var stat = filesystem.statSync(file);

//     console.log('dir', dir);
//     console.log('file', file);

//     if (stat && stat.isDirectory()) {
//       results = results.concat(_getAllFilesFromFolder(file));
//     } else results.push(file);
//   });

//   return results;
// };

// function importRouters() {
//   const routerNames = [];

//   const folders = _getAllFilesFromFolder('src/interfaces/routers');

//   console.log('folders', folders);

//   folders.forEach(filePath => {
//     let result = path
//       .basename(filePath)
//       .split(path.sep)
//       .pop();
//     console.log('result', result);

//     routerNames.push(result);
//   });

//   return routerNames;
// }

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());
