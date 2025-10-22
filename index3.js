// Comunicação em rede assíncrona
// • Bibliotecas net e http
// • Socket Server: createServer, listen, end
// • Socket Client: createConnection, destroy
// • Eventos: data e end
// • Servidores e clientes HTTP

// aqui tudo deve ser aberto no browser usando o localhost

const net = require('net'); // Importa o módulo 'net' do Node.js para criar operações de rede TCP
const http = require('http');

// A função de callback é executada sempre que um cliente se conecta ao servidor
const server = net.createServer((socket) => { // Cria um servidor TCP usando net.createServer()
      socket.end(`Hora no servidor: ${new Date()}\n`); // 'socket' representa a conexão entre o servidor e o cliente
}).on('error', (err) => { throw err; });

// Faz o servidor escutar na porta 3000
server.listen(3000);
console.log('Servidor TCP funcionando na porta 3000')

for (let i = 1; i <= 5; i++) { // Loop que executa 5 vezes, criando 5 conexões-cliente diferentes
      const client = net.createConnection(3000, "localhost");  // Cria uma conexão TCP com o servidor na porta 3000 em localhost
      client.on('data', (dados) => { // Registra um listener para o evento 'data'
            console.log(dados.toString()); // Converte os dados recebidos (Buffer) para string e exibe no console
      }).on('end', () => // Registra um listener para o evento 'end'
      { client.destroy(); });  // Destrói completamente o socket do cliente, liberando recursos
}

// necessário usar uma porta diferente da que usamos anteriormente
// vamos usar a 3001

// const http = require('http');

// servidor na porta 3001
const server3001 = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hora no Servidor: ${new Date()}\n`);
});

server3001.listen(3001, () => { // o server já foi feita lá em cima, por isso vamos usar server3001
      console.log('Servidor HTTP ouvindo porta 3001');
});






