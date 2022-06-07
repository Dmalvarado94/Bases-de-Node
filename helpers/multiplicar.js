const fs = require ('fs'); 

const crearArchivo = async( base = 5, listar = false ) => {

    try {


        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
        
         salida += `${ base } x  ${ i } = ${ base * i }\n`;   // el += es como decir salida = salida +... 
        }  // y el \n es una iteración que sirve para que no se desordene nuestra tabla. 
        
        if (listar) {
            console.log('===============')
            console.log('Tabla del:', base)
            console.log('===============')
            console.log(salida);
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


