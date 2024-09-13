"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importStar(require("node:test"));
const connectDb_1 = __importDefault(require("../db/connectDb"));
const config_1 = __importDefault(require("../utils/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_model_1 = __importDefault(require("../models/User.model"));
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const baseUrl = "/api/v1";
const api = (0, supertest_1.default)(app_1.default);
const testUser = {
    username: `testuser`,
    email: `testuser@example.com`,
    password: "password123"
};
(0, node_test_1.before)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connectDb_1.default)(config_1.default.MONGODB_URI);
}));
(0, node_test_1.after)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
(0, node_test_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.connection.db) {
        yield mongoose_1.default.connection.db.dropDatabase();
    }
}));
(0, node_test_1.describe)("Transaction API", () => {
    let token;
    (0, node_test_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield User_model_1.default.deleteMany({});
        yield api.post(`${baseUrl}/auth/register`).send(testUser).expect(201);
        const loginResponse = yield api
            .post(`${baseUrl}/auth/login`)
            .send({
            email: testUser.email,
            password: testUser.password
        })
            .expect(200);
        token = loginResponse.body.token;
    }));
    (0, node_test_1.describe)("POST /api/v1/transactions", () => {
        (0, node_test_1.default)("should add a new transaction", () => __awaiter(void 0, void 0, void 0, function* () {
            const transactionData = {
                amount: 100,
                type: "income",
                category: "Salary",
                description: "Description"
            };
            const response = yield api
                .post(`${baseUrl}/transactions`)
                .set("Authorization", `Bearer ${token}`)
                .send(transactionData)
                .expect(201);
        }));
    });
    (0, node_test_1.describe)("GET /api/v1/transactions", () => {
        (0, node_test_1.default)("should fetch all transactions for authenticated user", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .get(`${baseUrl}/transactions`)
                .set("Authorization", `Bearer ${token}`)
                .expect(200);
        }));
        (0, node_test_1.default)("should return unauthorized for missing token", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api.get(`${baseUrl}/transactions`).expect(401);
        }));
    });
});
