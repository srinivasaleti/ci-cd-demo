const { handler } = require('./index')

it('test', async () => {
  expect(await handler()).toEqual("1Hello")
})