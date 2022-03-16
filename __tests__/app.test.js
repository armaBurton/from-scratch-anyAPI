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

  it('should be able to create a new instance of a ship', async () => {
    const res = await request(app)
      .post('/api/v1/star_trek_ships')
      .send({
        name: 'Cube 461',
        faction: 'Borg',
        class_specifications: 'Cube Variant 2',
        crew_compliment: 129000,
        length_meters: 3000
      });

    expect(res.body).toEqual({
      name: 'Cube 461',
      faction: 'Borg',
      id: expect.any(String),
      class_specifications: 'Cube Variant 2',
      crew_compliment: 129000,
      length_meters: 3000
    });
  });

  it('should be able to list all space ships', async () => {
    const expected = await Ship.findAll();
    const res = await request(app)
      .get('/api/v1/star_trek_ships');
    
    expect(res.body).toEqual(expected);
  });
});
