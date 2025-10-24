// Outra forma de fazer o app2.js 
// coloque os dois app.js ao lado para ver as diferenças
// Importa Sequelize e DataTypes diretamente do pacote
const { Sequelize, DataTypes } = require('sequelize');

// Configura a conexão com o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',           // Usa SQLite como banco de dados
  storage: './database.sqlite' // Arquivo onde os dados serão armazenados
});

// Importa e inicializa o modelo Pessoa diretamente
// require('./models/pessoa') retorna uma função que precisa ser chamada
// com sequelize e DataTypes para retornar o modelo propriamente dito
const PessoaModel = require('./models/pessoa');
const Pessoa = PessoaModel(sequelize, DataTypes);

// Função para testar a conexão e operações com o banco
async function testConnection() {
  try {
    // Testa se a conexão com o banco está funcionando
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    // Sincroniza os modelos com o banco (cria as tabelas se não existirem)
    await sequelize.sync();
    console.log('Database synced');
    
    // Usa o método create do modelo Pessoa para inserir um registro
    const pessoa = await Pessoa.create({
      nome: 'John Doe',          // Campo nome
      email: 'john@example.com'  // Campo email
    });
    
    // Exibe a pessoa criada convertendo para objeto JavaScript
    console.log('Person created:', pessoa.toJSON());
    
  } catch (error) {
    // Captura erros de conexão ou operação no banco
    console.error('Unable to connect to the database:', error);
  } finally {
    // Bloco finally sempre executa, independente de sucesso ou erro
    // Fecha a conexão com o banco para liberar recursos
    await sequelize.close();
  }
}

// Chama a função de teste
testConnection();