
const { crearArchivo } = require ('./helpers/multiplicar');
const argv = require('yargs')
    .option('b',{          // b de base, option es la abreviacion
        alias: 'base',
        type: 'number',
        demandOption: true

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .check( (argv, options) => {
        if( isNaN ( argv.b ) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
      .argv;

console.clear();

console.log( argv );

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ ,  base = 5 ] = arg3.split('=');

// console.log( base ); 


// // imprimir la tabla del 5
// // const base = 6;


crearArchivo( argv.b, argv.l )
.then( nombreArchivo => console.log ( nombreArchivo, 'Creado' ) )
.catch( err => console.log(err) );