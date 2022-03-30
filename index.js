require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
  console.clear();

  let ans = '';

  do {
    ans = await mostrarMenu();
    if(ans !== '0') await pausa();
  } while (ans !== '0');
};
main();
