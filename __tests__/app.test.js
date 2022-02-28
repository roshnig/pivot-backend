const app = require("../app");
const request = require("supertest");
const db = require("../db/connect.js");
const mongoose = require("mongoose");

beforeAll(async () => {
  await db();
});

afterAll(async () => {
  await mongoose.connection.close();
});

let sessionId;

describe("GET /api", () => {
  it("serves a description of the api", () => {
    return request(app).get("/api").expect(200);
  });
});

describe("POST /api/presentations/", () => {
  const pres = {
    presentationId: "2893rhf834",
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
  it("200: create presentation, returns saved document with a four character alphanumeric session id", () => {
    return request(app)
      .post(`/api/presentations/`)
      .send(pres)
      .expect(200)
      .then(({ body }) => {
        sessionId = body.sessionId;
        expect(sessionId).toMatch(/^[a-z0-9]{4}$/);
      });
  });
});

describe("GET /api/presentations/:sessionId", () => {
  test("200: returns presentation data given session id", () => {
    return request(app)
      .get(`/api/presentations/${sessionId}`)
      .expect(200)
      .then(({ body }) => {
        console.log(body);
        expect(body.presentation).toMatchObject({
          sessionId: expect.any(String),
          presentationId: expect.any(String),
          slides: expect.any(Array),
        });
      });
  });
  test("404: sessionId not found", () => {
    return request(app).get(`/api/presentations/INVALIDSESSIONID`).expect(404);
  });
});
