const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('index route', () => {
    it('should set the testing envirement', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });

    //1st- GET check if get request returns a 200 ok status
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
});
