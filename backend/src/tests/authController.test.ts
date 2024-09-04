import { strict as assert } from "assert";
import test, {
  describe,
  before,
  after,
  afterEach,
  beforeEach
} from "node:test";
import supertest from "supertest";
import app from "../app";
import mongoose from "mongoose";
import connectDB from "../db/connectDb";
import config from "../utils/config";
import User from "../models/User.model";

const baseUrl = "/api/v1/auth";
const api = supertest(app);

const testUser = {
  username: `testuser`,
  email: `testuser@example.com`,
  password: "password123"
};

before(async () => {
  await connectDB(config.MONGODB_URI);
});

after(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  await User.deleteMany({});
});

describe("User Registration and Login", () => {
  describe("Registering a User", () => {
    test("Success with Status Code 201 with valid Credentials", async () => {
      const response = await api
        .post(`${baseUrl}/register`)
        .send(testUser)
        .expect(201);

      assert.equal(response.body.message, "User registered successfully");
    });

    test("Fails with Status Code 400 if email exists", async () => {
      await api.post(`${baseUrl}/register`).send(testUser);

      const response = await api
        .post(`${baseUrl}/register`)
        .send(testUser)
        .expect(400);

      assert.equal(response.body.message, "User already exists");
    });
  });

  describe("Signing or Logging a User", () => {
    beforeEach(async () => {
      await api.post(`${baseUrl}/register`).send(testUser);
    });

    test("Success with Status Code 200 with valid credentials", async () => {
      const response = await api
        .post(`${baseUrl}/login`)
        .send({
          email: testUser.email,
          password: testUser.password
        })
        .expect(200);

      assert.ok(response.body.token);
    });

    test("Fails with Status Code 401 with invalid credentials", async () => {
      const response = await api
        .post(`${baseUrl}/login`)
        .send({
          email: testUser.email,
          password: "wrongpassword"
        })
        .expect(401);

      assert.equal(response.body.message, "Invalid username or password");
    });
  });
});
