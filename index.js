// Importa Sequelize e DataTypes do pacote sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Criação da intância do Sequelize para SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',            // Define o dialeto do banco como SQLite
  storage: './database.sqlite'  // Define o arquivo onde os dados serão armazenados
});

// Importa e inicializa o modelo Pessoa
// A função require('./pessoa') retorna uma função que precisa receber
// sequelize e DataTypes como parâmetros para retornar o modelo inicializado
const Pessoa = require('./pessoa')(sequelize, DataTypes);

// Função assíncrona para inicializar o banco de dados
async function initializeDatabase() {
  try { // Testa a conexão com o banco de dados
    await sequelize.authenticate();
    console.log('Database connection established.');

    // Sincroniza os modelos com o banco de dados
    await sequelize.sync({ force: false }); // force: false - não recria as tabelas se já existirem
    console.log('Database synced.');
    
    // Retorna os modelos e a instância do sequelize para uso em outros arquivos
    return { Pessoa, sequelize };
  } catch (error) {
    console.error('Database initialization failed:', error); // Captura e exibe qualquer erro ocorrido durante a inicialização
    throw error; // Propaga o erro para quem chamar esta função
  }
}

// Exporta as funções e modelos para uso em outros arquivos
module.exports = {
  initializeDatabase,  // Função para inicializar o banco
  Pessoa,           // Modelo pessoa
  sequelize     // Instância do Sequelize
};