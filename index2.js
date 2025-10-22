// Tratamento assíncrono de arquivos
// • Bibliotecas fs e fs/promises
// • Operações: readFile, appendFile, writeFile
// • Descritores de arquivos: open e close
// • Eventos: createReadStream

// Importa o módulo 'fs' para operações de arquivo síncronas e com callbacks
const fs = require("fs");
// Importa a versão baseada em Promises do módulo 'fs' para uso com async/await
const fsp = require('fs/promises');


// Escrever no arquivo de forma assíncrona e adiciona uma linha ao arquivo 'log.txt' com a data/hora atual
fs.appendFile('log.txt',
      `Escrito em ${new Date()}\n`, 'utf8',
      (err) => {
            // Se ocorrer erro, lança exceção
            if (err) throw err;
            // Mensagem de confirmação no console
            console.log("Linha adicionada");
      });

// Ler arquivo de forma assíncrona com async/await e função assíncrona para ler e exibir o conteúdo de um arquivo
async function teste_leitura() {
      try {
            // Aguarda a leitura completa do arquivo 'index2.js'
            const data = await fsp.readFile(
                  'index2.js', {
                  encoding:'utf8' // Especifica a codificação do arquivo como UTF-8
            });
            // Exibe o conteúdo do arquivo no console
            console.log(data);
      } catch (err) { 
            // Captura e exibe qualquer erro ocorrido durante a leitura
            console.log(err); 
      }
}
teste_leitura(); // callback







