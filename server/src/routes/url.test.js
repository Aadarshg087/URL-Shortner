const request = require("supertest");
const app = require("../server");

describe("Testing /GET Requests for URLs", () => {
  test("Checking for the redirect url", async () => {
    const response = await request(app)
      .get("/url/v1/qzdtvgzf")
      .expect(302)
      .expect("Content-Type", /text/);

    // console.log(response);
    // expect(response.statusCode).toBe(200);
    // expect(response.statusCode).toBe(302); // or 301
    // expect(response.headers.location).toBe("https://github.com/Aadarshg087"); // optional sanity check
  });

  test("Sending wrong short url to check errors", async () => {
    const response = await request(app)
      .get("/url/v1/sfsfsgsr")
      .expect(404)
      .expect({ error: "Short URL not found" });
  });
});

describe("Testing /POST Requests for URLs", () => {
  // this should be "redirectURL" to get shorten url
  const wrongRequest = {
    URL: "something",
  };

  test("Checking for creating short URL", async () => {
    const response = await request(app)
      .post("/url/v1/shorten")
      .send({
        redirectURL: "youtube.com",
      })
      .expect("Content-Type", /json/)
      .expect(201);

    expect(response.body).toHaveProperty("ShortURL");
  });

  test("Sending wrong object to check errors", async () => {
    const response = await request(app)
      .post("/url/v1/shorten")
      .send(wrongRequest)
      .expect(400)
      .expect({
        error: "URL is required",
      });
  });
});
