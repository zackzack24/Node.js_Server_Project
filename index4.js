// Tratamento assíncrono de arquivos
// • Bibliotecas fs e fs/promises (index2)
// • Operações: readFile, appendFile, writeFile (index2)
// • Descritores de arquivos: open e close (index2)
// • Eventos: createReadStream (index4)
// • index4 serve para usarmos outra sintaxe do node, pois não podemos misturar sintaxes diferentes

// Importa funções específicas do módulo 'node:fs' usando a sintaxe ESM
import { open, close, appendFile, createReadStream } from "node:fs"

// Função para fechar o arquivo de forma segura
const closeArq = (fd) => {
      // Fecha o descritor de arquivo (file descriptor)
      close(fd, (err) => { 
          // Se ocorrer erro ao fechar, lança exceção
          if (err) throw err; 
      });
}

// Abre o arquivo 'log.txt' no modo append (adicionar)
open('log.txt', 'a', (err, fd) => {
      // Se ocorrer erro na abertura, lança exceção
      if (err) throw err;
      // Adiciona uma linha ao arquivo usando o descritor de arquivo
      appendFile(fd, `Escrito em ${new Date()}\n`,
            'utf8',
            (err) => { 
                  // Fecha o arquivo após escrever (independente de sucesso ou erro)
                  closeArq(fd); 
                  // Se ocorrer erro na escrita, lança exceção
                  if (err) throw err; 
            });
});



// Cria um stream de leitura para o arquivo 'log.txt'
const reader = createReadStream('log.txt',
      {
            flag: 'r',          // Modo leitura
            encoding: 'UTF-8',  // Codificação do arquivo
            start: 5,           // Começa a ler a partir do byte 5
            end: 200,           // Para de ler no byte 200
            highWaterMark: 10   // Tamanho máximo de cada chunk (pedaço) lido: 10 bytes
      });

// Evento disparado quando dados estão disponíveis para leitura
reader.on('data', (chunk) => {
      // Exibe cada chunk (pedaço) de dados lido do arquivo
      console.log(chunk);
});