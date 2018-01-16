const config = require('../config/config')
const comic = require('../lib/comic')
const wrongUrl = 'https://www.google.com'

test('calling comic.cyanide() with correct data returns url', async () => {
  await expect(comic.cyanide(config.explosmUrl)).resolves.toMatch('files')
})

test('calling comic.cyanide() with wrong data returns error', async () => {
  try {
    await comic.cyanide(wrongUrl)
  } catch (e) {
    expect.objectContaining(e)
  }
})

test('calling comic.xkcd() with correct data returns url', async () => {
  await expect(comic.xkcd(config.xkcdUrl)).resolves.toMatch('comics')
})

test('calling comic.xkcd() with wrong data returns error', async () => {
  try {
    await comic.xkcd(wrongUrl)
  } catch (e) {
    expect.objectContaining(e)
  }
})

test('calling comic.dinocomics() with correct data returns url', async () => {
  await expect(comic.dinocomics(config.dinocomicsUrl)).resolves.toMatch('comics')
})

test('calling comic.dinocomics() with wrong data returns error', async () => {
  try {
    await comic.dinocomics(wrongUrl)
  } catch (e) {
    expect.objectContaining(e)
  }
})
