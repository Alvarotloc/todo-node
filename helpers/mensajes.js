require('colors');

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log('==========================='.red);
    console.log('   Seleccione una opción   ');
    console.log('===========================\n'.red);

    console.log(`${'1.'.red} Crear Tarea`);
    console.log(`${'2.'.red} Lista de Tareas`);
    console.log(`${'3.'.red} Lista de Tareas completadas`);
    console.log(`${'4.'.red} Lista de Tareas pendientes`);
    console.log(`${'5.'.red} Compltar Tarea(s)`);
    console.log(`${'6.'.red} Borrar Tarea`);
    console.log(`${'0.'.red} Salir \n`);

    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question('Seleccione una opción: ', (ans) => {
        readLine.close();
        resolve(ans);
    });
  });
};

const pausa = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
          });
        
          readLine.question(`\nPresione ${'ENTER'.red} para continuar\n `, () => {
            readLine.close();
            resolve();
          });
    })
};

module.exports = {
  mostrarMenu,
  pausa,
};
