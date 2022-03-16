const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Ship = require('../lib/models/Ship');

describe('alchemy-app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });


  it('should be able to get all space ships', async () => {
    const expected = await Ship.findAll();
    const res = await request(app)
      .get('/api/v1/star_trek_ships');
    
    expect(res.body).toEqual(expected);
  });
});
