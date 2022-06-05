import { unknownObject, createMyServer } from './cjsToEsm.mjs';

console.log(unknownObject);

createMyServer.listen(3000);

console.log('Server is ready on 3000 port!');

