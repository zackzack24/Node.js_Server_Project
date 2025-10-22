// Eventos e tratamento assíncrono
// • Utilização do Event Loop
// • Eventos: data, end, close, error
// • Tratamento via função callback
// • Recepção segmentada (stream)


const http = require('http'); // Importa o módulo HTTP para criar servidor e cliente HTTP
const { normalize } = require('path'); // não estamos usando no código atual

const server = http.createServer((req,res) => { // Cria um servidor HTTP que responde a todas as requisições
      res.write("A"); // Cria um servidor HTTP que responde a todas as requisições
      res.write("B"); // Mesma coisa 
      res.end("C");  // Envia o caractere "C" e finaliza a resposta
}).on("close",()=>console.log("Servidor em funcionamento.")); 

const req = http.request({hostname: 'localhost', port: 3002, method:'GET'}, // cria uma requisição HTTP GET para o próprio servidor (localhost:3002)
      (res) => { 
            res.on('data', (d) => console.log("Resp:"+d.toString())); // Evento 'data': disparado quando dados são recebidos do servidor
            res.on('end', () => console.log("Fim da comunicação")); // Evento 'end': disparado quando todos os dados foram recebidos
            res.on('close', () => console.log("Conexão encerrada")); // Evento 'close': disparado quando a conexão é fechada
      });
req.end(); // Finaliza a requisição e envia para o servidor

setTimeout(()=>server.close(),4000); // Agenda o fechamento do servidor após 4 segundos
server.listen(3002); // Inicia o servidor na porta 3002, escolha a porta que desejar

server.on('error', (e) => { // Registra listener para evento 'error' do servidor 
      if (e.code == 'EADDRINUSE') { // Verifica se o erro é "Endereço já em uso"
            console.log('Endereço em uso, nova tentativa...');
            setTimeout(() => {
                  server.close(); // Fecha o servidor
                  // server.listen(); server.listen(PORT, HOST); // variáveis PORT e HOST não definidas, comentadas para caso precise usar.
            }, 1000);
      }
});


      