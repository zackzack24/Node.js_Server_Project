<div align="center">

<br> <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="200" height="200"> <br> <br></div>

 
Projeto de estudos em Node.js explorando servidores HTTP, TCP, operações com file system e streams.

 Tecnologias
Node.js - Ambiente de execução JavaScript

Módulos Nativos: http, net, fs, path

Visualização das Portas e protocolos 

|Nome|Protocolo|Porta|
|:---|:---:|:---:|
|FTP|File Transfer Protocol|21|
|HTTP| Hypertext Transfer Protocol|80|
|SMTP| Simple Mail Transfer Protocol|465|
|POP3|Post Office Protocol|995|

Visualização de rota com EXPRESS no NODE.JS
```
const express = require('express')
const app = express()

app.get('/user/:id', (req, res) => {
      res.send(`Id fornecido: ${req.params.id}`) 
})

app.listen(3000, () =>{
      console.log(‘Servidor executando na porta 3000’)
})
```

Visualização de uma requisição em SOAP
```
<?xml version="1.0"?>
<soap:Envelope 
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope/"
    soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">
    
    <soap:Body>
        <m:Somar xmlns:m="https://servidor/soma">
            <m:valorA>10</m:valorA>
            <m:valorB>15</m:valorB>
        </m:Somar>
    </soap:Body>
    
</soap:Envelope>
```

Veja a resposta dessa requisição
```
<?xml version="1.0"?>
<soap:Envelope 
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope/"
    soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">
    
    <soap:Body>
        <m:SomarResponse xmlns:m="https://servidor/soma">
            <m:resultado>25</m:resultado>
        </m:SomarResponse>
    </soap:Body>
    
</soap:Envelope>
´´´

Visualização dos métodos HTTP

| | | |
|:---|:---:|:---:|
| | | |
| | | |
| | | |
| | | |




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
