
const { crearArchivo } = require ('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.b, argv.l )
.then( nombreArchivo => console.log ( nombreArchivo, 'Creado' ) )
.catch( err => console.log(err) );