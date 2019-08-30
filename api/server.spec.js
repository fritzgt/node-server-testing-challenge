const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  //1st- GET check if get request returns a 200 ok status
  describe('index route', () => {
    it('should return a 200 ok status from index route', async () => {
      const res = await request(server).get('/');
      expect(res.status).toEqual(200);
    });

    //2nd- GET check if the request returns a json object
    it('should return a json object', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });

    //3nd- CREATE check if the request returns a 200 ok
    it('should return a json object', async () => {
      const res = await request(server).post('/');
      expect(res.status).toEqual(200);
    });
    //4th- CREATE check if the request returns a json object
    it('should return a json object', async () => {
      const res = await request(server).post('/');
      expect(res.type).toBe('application/json');
    });

    //5th- DELETE check if the request returns a 200 ok
    it('should return a json object', async () => {
      const res = await request(server).delete('/');
      expect(res.status).toEqual(200);
    });
    //6th- DELETE check if the request returns a json object
    it('should return a json object', async () => {
      const res = await request(server).delete('/');
      expect(res.type).toBe('application/json');
    });
  });
  //finsih
});
