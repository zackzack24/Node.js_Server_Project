// Criação de um servidor web simples usando Express.js, na porta 3000

// importação do módulo express
const express = require("express"); 

// criação da aplicação express
const app = express();

// definição da porta
const port = 3000;

app.get('/', (req, res) => { 
      res.json({mensagem: "Olá Mundo!"});
});

app.listen(port, () => {
      console.log(`Servidor rodando em ${port}`);
});