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
const assert_1 = require("assert");
const node_test_1 = __importStar(require("node:test"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb_1 = __importDefault(require("../db/connectDb"));
const config_1 = __importDefault(require("../utils/config"));
const User_model_1 = __importDefault(require("../models/User.model"));
const baseUrl = "/api/v1/auth";
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
    yield User_model_1.default.deleteMany({});
}));
(0, node_test_1.describe)("User Registration and Login", () => {
    (0, node_test_1.describe)("Registering a User", () => {
        (0, node_test_1.default)("Success with Status Code 201 with valid Credentials", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .post(`${baseUrl}/register`)
                .send(testUser)
                .expect(201);
            assert_1.strict.equal(response.body.message, "User registered successfully");
        }));
        (0, node_test_1.default)("Fails with Status Code 400 if email exists", () => __awaiter(void 0, void 0, void 0, function* () {
            yield api
                .post(`${baseUrl}/register`)
                .send(Object.assign(Object.assign({}, testUser), { username: "unique" }));
            const response = yield api
                .post(`${baseUrl}/register`)
                .send(testUser)
                .expect(400);
            assert_1.strict.equal(response.body.message, `Duplicate key error: The email already exists`);
        }));
    });
    (0, node_test_1.describe)("Signing or Logging a User", () => {
        (0, node_test_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
            yield api.post(`${baseUrl}/register`).send(testUser);
        }));
        (0, node_test_1.default)("Success with Status Code 200 with valid credentials", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .post(`${baseUrl}/login`)
                .send({
                email: testUser.email,
                password: testUser.password
            })
                .expect(200);
            assert_1.strict.ok(response.body.token);
        }));
        (0, node_test_1.default)("Fails with Status Code 401 with invalid credentials", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .post(`${baseUrl}/login`)
                .send({
                email: testUser.email,
                password: "wrongpassword"
            })
                .expect(401);
            assert_1.strict.equal(response.body.message, "Invalid username or password");
        }));
    });
});
//# sourceMappingURL=authController.test.js.map