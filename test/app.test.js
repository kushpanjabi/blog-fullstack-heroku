const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../index');


//endpoint tests

describe('GET /blog test', () => {
  it('should return status 200 and two blogs: one sample one new', () => {
    return supertest(app)
      .get('/blogs')
      .expect(200, '[{"blog_id":23,"description":"Sample blog"},{"blog_id":25,"description":"new blog"}]')
  });
});

describe('GET /blog/:id test', () => {
  it('should return status 200 and specific blog by ID', () => {
    return supertest(app)
      .get('/blogs/23')
      .expect(200, '{"blog_id":23,"description":"Sample blog"}')
  });
})




