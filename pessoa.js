
// 'use strict' - Habilita o modo estrito do JavaScript, que torna mais fácil codar com o JavaScript
// previne o uso de variáveis não declaradas e melhora a performance em alguns casos.

'use strict';
const { Model } = require('sequelize'); // Importa a classe Model do Sequelize
// Oque é a model? Model é uma representação de uma tabela no banco de dados.

module.exports = (sequelize, DataTypes) => { // Exporta uma função que define o modelo Pessoa
  // Isso significa que Pessoa terá todos os métodos e propriedades do Model
  class Pessoa extends Model { // A função recebe a instância do sequelize e os DataTypes como parâmetros
    static associate(models) {
      // 'static' significa que este método pertence à classe, não às instâncias
      // 'associate' é uma convenção do Sequelize para definir relacionamentos entre modelos
      // Este método será chamado automaticamente pelo Sequelize
      // quando todos os modelos forem carregados
      // Aqui você pode definir associações, como:
      // this.hasMany(models.OutroModelo);
      // this.belongsTo(models.AlgumOutroModelo);
    }
  }
  // Inicializa o modelo Pessoa com a configuração dos campos
  Pessoa.init({ // Inicializa o modelo Pessoa com a configuração
    nome: DataTypes.STRING, 
    email: DataTypes.STRING
  }, {
    sequelize, // Referência à instância do Sequelize necessária para que o modelo saiba qual conexão de banco usar
    modelName: 'Pessoa',  // Nome do modelo (usado internamente pelo Sequelize)
  });

  // Retorna a classe Pessoa configurada
  // Esta será a classe que usaremos para criar instâncias e fazer queries
  return Pessoa;
};