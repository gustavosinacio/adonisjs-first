'use strict';

const { test, trait } = use('Test/Suite')('Session');

/**@type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

trait('Test/ApiClient');

test('It should return JWT token when session created', async ({
  assert,
  client
}) => {
  const user = await User.create({
    name: 'Testing Name',
    email: 'teste@teste.com',
    password: '123456'
  });

  const response = await client
    .post('/sessions')
    .send({
      email: 'teste@teste.com',
      password: '123456'
    })
    .end();

  console.log(response.body.token);

  response.assertStatus(200);
  assert.exists(response.body.token);
});
