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
  const pres = JSON.parse(
    '{"presentationId":"1Ozz-IETgND3YLc1vBshFtzqTchLou9XZ6yR4LEAbeHk","slides":{"presentationId":"1Ozz-IETgND3YLc1vBshFtzqTchLou9XZ6yR4LEAbeHk","slides":[{"slideId":"p","slideImageUrl":"https://lh6.googleusercontent.com/IZEyqatojKD2XYIkrsclJ-nJkJFFD1Bpg4NXTFY5gwUELudsXooS-WRPe2eKp5JFd3FBmW-drmy8fftBbqTfEw1t_ZP1cK2kQlenpd4mDelS0a5Nfc-Bs3fT6yhPD31e4BqHm0rS-s0UKTgQXRHnN4MUriQtBMj_Iyfd6sUKod-0gf4FS1JlgvGAYyWRB5-6ujg0s5nQPTU-p3YRliAfO2cMcvZEoj-twLRoeP57=s1600"},{"slideId":"g117ae802f4d_2_0","slideImageUrl":"https://lh4.googleusercontent.com/cx2_mI5dOx-pwcn6HSGTUfKFVqUiVWELIUPQN-Tma1iQWNElUPt02vOSBXEigUpkyL-pHFcW0jVrJMA0kBt9XdrzJN2Q4bGDQjKYMdYpKV7lhCLK_oCe9pDABp0jmcTfMsbMBfurAn3FtltzUNhSYUxEdCkRRsf1JDOC8JVFXkDloJu5LTVAKPJi18yPgFlMTe60q_O08xwXxPJ5DvXmHghvYqTKTQUf35RVGmIj=s1600"},{"slideId":"g117ae802f4d_2_5","slideImageUrl":"https://lh3.googleusercontent.com/dmhutxAbQ7bxIEvkmSsth_aHhkWvwTuky-kYL4uRjtTRtFrI3pxd8N1UW8Xeegqx_QUAj4XiDXQQKOpv0iZNQkNXwNOT7U8TlwoSgT2NivDzwPQQjQWwVekFonJR1Exx8QWwNx_lgSKDsM1KoUmjv8vxdrRCSoAmK7_-d9adKjskaempJ9t20Wcac-fdb9dmPiH7J2T2kP0fowJVas8gBTLsbSw4D6NUULvOh4kq=s1600"}]}}'
  );
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
        console.log(body.presentation.slides[0]);
        expect(body.presentation).toMatchObject({
          sessionId: expect.any(String),
          presentationId: expect.any(String),
          slides: expect.arrayContaining([
            expect.ObjectContaining({
              slideId: expect.any(String),
              slideImageUrl: expect.any(String),
              question: expect.any(Object),
            }),
          ]),
        });
      });
  });
  test("404: sessionId not found", () => {
    return request(app).get(`/api/presentations/INVALIDSESSIONID`).expect(404);
  });
});
