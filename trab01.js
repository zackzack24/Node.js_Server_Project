const fs = require('fs/promises');

async function teste_leitura(){
      try {
            let data = await fs.readFile('log.txt')
                  console.log(data);
      }catch(err){
            console.log(err)
      }
}
teste_leitura();