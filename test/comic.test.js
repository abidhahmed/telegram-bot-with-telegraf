const config = require('../config/config')
const comic = require('../lib/comic')

test('calling comic.cyanide() with correct data returns url', async () => {
  await expect(comic.cyanide(config.explosmUrl)).resolves.toMatch('files')
})

test('calling comic.cyanide() with wrong data returns error', async () => {
  try {
  	await comic.cyanide('https://www.google.com')
  } catch (e) {
  	expect.objectContaining(e)
  }
})

test('calling comic.xkcd() with correct data returns url', async () => {
  await expect(comic.xkcd(config.xkcdUrl)).resolves.toMatch('comics')
})

test('calling comic.xkcd() with wrong data returns error', async () => {
  try {
  	await comic.xkcd('https://www.google.com')
  } catch (e) {
  	expect.objectContaining(e)
  }
})

test('calling comic.dinocomics() with correct data returns url', async () => {
  await expect(comic.dinocomics(config.dinocomicsUrl)).resolves.toMatch('comics')
})

test('calling comic.dinocomics() with wrong data returns error', async () => {
  try {
  	await comic.dinocomics('https://www.google.com')
  } catch (e) {
  	expect.objectContaining(e)
  }
})
