require('dotenv').config();
const sequelize = require('../config/testDatabase');
const User = require('../models/User');

describe('User Model', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('La table User est créée avec succès', async () => {
    const tableNames = await sequelize.getQueryInterface().showAllSchemas();
    const tableExists = tableNames.some((table) => table.name === 'Users');
    expect(tableExists).toBe(true);
  });

  test('Un utilisateur peut être créé et récupéré', async () => {
    const userData = {
      username: 'TestUser',
      email: 'testuser@example.com',
      password: 'TestPassword123',
    };

    const user = await User.create(userData);
    expect(user).toBeDefined();
    expect(user.email).toBe(userData.email);
    expect(user.username).toBe(userData.username);
    expect(user.password).not.toBe(userData.password);
  });

  test('Un utilisateur est correctement récupéré depuis la base', async () => {
    const user = await User.findOne({ where: { email: 'testuser@example.com' } });
    expect(user).toBeDefined();
    expect(user.email).toBe('testuser@example.com');
  });

  test('La méthode checkPassword fonctionne correctement', async () => {
    const user = await User.findOne({ where: { email: 'testuser@example.com' } });
    const isPasswordValid = await user.checkPassword('TestPassword123');
    expect(isPasswordValid).toBe(true);

    const isPasswordInvalid = await user.checkPassword('WrongPassword');
    expect(isPasswordInvalid).toBe(false);
  });
});
