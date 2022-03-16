const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('alchemy-app routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });


  it('should be able to create an new instance of a space ship', async () => {
    const res = await request(app)
      .get('/api/v1/space_ship');
      // .send({ name: 'Pizza', age: 3, favoriteTreat: 'Pizza' });

    console.log('|| res.body >', res.body);
    // console.log('|| re.body >', res.body);
    // expect(res.body).toEqual([

    // ]);
    
  });
});
