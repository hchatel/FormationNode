module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('user', {
          id: {
            primaryKey: true,
            type: Sequelize.STRING,
          },
          name: Sequelize.STRING,
          password: Sequelize.STRING,
          created_at: { allowNull: false, type: Sequelize.DATE },
          updated_at: { allowNull: false, type: Sequelize.DATE },
      });
  },

  down: async (queryInterface) => {
      await queryInterface.dropTable('user');
  },
};
