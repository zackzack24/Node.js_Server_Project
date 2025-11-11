<div align="center">

<br> <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="200" height="200"> <br> <br></div>

 
Projeto de estudos em Node.js explorando servidores HTTP, TCP, operações com file system e streams.

 Tecnologias
Node.js - Ambiente de execução JavaScript

Módulos Nativos: http, net, fs, path

Visualização de exemplos de ENDPOINTS e ROTAS da arquitetura REST

| Endpoint | Rota | Descrição |
| :---         |     :---:      |          :--- |
| /notas   | GET http://localhost:3000/notas     | Consulta todas as notas existentes    |
| /notas     | POST http://localhost:3000/notas       | Inclusão de uma nota, usando dados enviados no corpo      |
| /notas/:id     | GET http://localhost:3000/notas/1       | Consulta da nota de id 1.      |
| /notas/:id     | GET http://localhost:3000/notas/2       | Consulta da nota de id 2.      |
| /notas/:id     | PUT http://localhost:3000/notas/1       | Alteração da nota id 1, usando dados do corpo da requisição      |
| /notas/:id     | PUT http://localhost:3000/notas/2       | Alteração da nota id 2, usando dados do corpo da requisição      |
| /notas/:id     | DELETE http://localhost:3000/notas/1      | Remove a nota com id 1.      |
| /notas/:id     | DELETE http://localhost:3000/notas/2      | Remove a nota com id 2.      |

# Clone o repositório
git clone https://github.com/zackzack24/Node.js_Server_Project.git

# Entre no diretório
cd SERVIDOR001

# Instale as dependências
npm install

# Execute os exemplos
node index.js    
# Servidor HTTP
node index2.js   
# File System  
node index3.js   
# Servidor TCP

<div align="center">
Desenvolvido com Node.js <br/>
Ainda em Desenvolvimento...
</div>
