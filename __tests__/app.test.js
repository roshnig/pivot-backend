const app = require("../app");
const request = require("supertest");
const db = require("../db/connect.js");
const mongoose = require("mongoose");
db();

afterAll(() => mongoose.disconnect());

describe("GET /api", () => {
  it("serves a description of the api", () => {
    return request(app).get("/api").expect(200);
  });
});

describe(" POST /api/presentations/", () => {
  const presentationId = "2893rhf834";
  const pres = {
    presentationId,
    slides: [
      {
        slideId: "78rh3784r34",
        slideImageUrl: "http://www.gooogle.com/r89h239rn23",
      },
      {
        slideId: "389rj3498f",
        slideImageUrl: "http://www.gooogle.com/348f8934n9f",
      },
    ],
  };
  it("responds with status 200 create presentation,returns saved document with session id", () => {
    return request(app)
      .post(`/api/presentations/`)
      .send(pres)
      .expect(200)
      .then((res) => {
        console.log(res.body);
      });
  });
});
