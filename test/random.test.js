const config = require('../config/config')
const random = require('../lib/random')

/*
Volatile integration tests, not exactly expecting data to be correct
all the time so using anything() for now.
*/

test('calling random.cat() with correct data returns anything', async () => {
  await expect(random.cat(config.catApi)).resolves.toEqual(expect.anything())
})

test('calling random.joke() with correct data returns anything', async () => {
  await expect(random.joke(config.jokeUrl)).resolves.toEqual(expect.anything())
})
