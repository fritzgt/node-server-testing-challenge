const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  //check if get request returns a 200 ok status
  describe('server.js', () => {
    it('should return a 200 ok status from index route', async () => {
      const res = await request(server).get('/');
      expect(res.status).toEqual(200);
    });
  });

  it('should return a json object', async () => {
    const res = await request(server).get('/');
    expect(res.type).toBe('application/json');
  });
});
