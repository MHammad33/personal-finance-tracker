import test, {
  after,
  afterEach,
  before,
  beforeEach,
  describe
} from "node:test";
import connectDB from "../db/connectDb";
import config from "../utils/config";
import mongoose from "mongoose";
import User from "../models/User.model";
import app from "../app";
import supertest from "supertest";

const baseUrl = "/api/v1";
const api = supertest(app);

const testUser = {
  username: "testuser",
  email: "testuser@example.com",
  password: "password123"
};

before(async () => {
  await connectDB(config.MONGODB_URI);
});

after(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  if (mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase();
  }
});

describe("Transaction API", () => {
  let token: string;

  beforeEach(async () => {
    await User.deleteMany({});

    await api.post(`${baseUrl}/auth/register`).send(testUser).expect(201);
    const loginResponse = await api
      .post(`${baseUrl}/auth/login`)
      .send({
        email: testUser.email,
        password: testUser.password
      })
      .expect(200);

    token = loginResponse.body.token;
  });

  describe("POST /api/v1/transactions", () => {
    test("should add a new transaction", async () => {
      const transactionData = {
        amount: 100,
        type: "income",
        category: "Salary",
        description: "Description"
      };

      await api
        .post(`${baseUrl}/transactions`)
        .set("Authorization", `Bearer ${token}`)
        .send(transactionData)
        .expect(201);
    });
  });

  describe("GET /api/v1/transactions", () => {
    test("should fetch all transactions for authenticated user", async () => {
      await api
        .get(`${baseUrl}/transactions`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200);
    });

    test("should return unauthorized for missing token", async () => {
      await api.get(`${baseUrl}/transactions`).expect(401);
    });
  });
});
