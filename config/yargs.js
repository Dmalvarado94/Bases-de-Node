const argv = require('yargs')
    .option('b',{          // b de base, option es la abreviacion
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'indica hasta donde quieres que se haga la multiplicación'
    })
    .check( (argv, options) => {
        if( isNaN ( argv.b ) ){
            throw 'La base tiene que ser un número'.yellow
        }
        return true;
    })
      .argv;


      module.exports = argv;