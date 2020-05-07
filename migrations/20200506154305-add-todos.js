module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('todo', {
          id: {
            primaryKey: true,
            type: Sequelize.STRING,
          },
          user_id: {
              allowNull: false,
              type: Sequelize.STRING,
              references: {
                  model: 'user',
                  key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'RESTRICT',
          },
          description: Sequelize.STRING,
          checked: Sequelize.BOOLEAN,
          created_at: { allowNull: false, type: Sequelize.DATE },
          updated_at: { allowNull: false, type: Sequelize.DATE },
      });
  },

  down: async (queryInterface) => {
      await queryInterface.dropTable('todo');
  },
};
