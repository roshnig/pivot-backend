const app = require("../app");
const request = require("supertest");

describe("GET /api", () => {
  it("serves a description of the api", () => {
    return request(app).get("/api").expect(200);
  });
});
