// Importa a função de inicialização e o modelo Pessoa do arquivo models/index.js
const { initializeDatabase, Pessoa } = require('./models');

// Função principal assíncrona que fará todo o processo
async function main() {
  try {
    await initializeDatabase(); // Inicializa o banco de dados, conecta e sincroniza modelos
    
    // Aqui nós podemos usar o modelo Pessoa para criar uma nova entrada no banco de dados
    const novaPessoa = await Pessoa.create({
      nome: 'Teste Teste',
      email: 'Teste@example.com'
    });
    
    console.log('Pessoa criada com sucesso:', novaPessoa.toJSON()); // Mostra os dados da nova pessoa criada no nosso banco de dados
    // toJSON() converte a instância do modelo para um objeto JavaScript simples

  } catch (error) {
    console.error('Erro:', error); // Captura e exibe qualquer erro que ocorrer durante o processo
  }
}

// Chama a função principal para executar o programa
main();

