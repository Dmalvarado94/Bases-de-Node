const fs = require ('fs'); 
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {


        let salida = '';
        let consola = ''; 
    
        for (let i = 1; i <=hasta; i++) {
        
         salida += `${ base } x ${ i } = ${ base * i }\n`;
         consola += `${ base } ${ 'x'.green }  ${ i } ${'='.green} ${ base * i }\n`;   // el += es como decir salida = salida +... 
        }  // y el \n es una iteración que sirve para que no se desordene nuestra tabla. 
        
        if (listar) {
            console.log('==============='.yellow)
            console.log('Tabla del:'.blue, base)
            console.log('==============='.yellow)
            console.log(consola);
        }    
       
    
        fs.writeFileSync( `tabla-${ base }.txt`, salida );
        
        return `tabla-${ base }.txt`; 

    } catch (error) {
        throw err; 
    }
    



    }



module.exports = {
    crearArchivo
}


