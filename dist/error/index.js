"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_api_error_1 = __importDefault(require("./custom-api.error"));
const bad_request_error_1 = __importDefault(require("./bad-request.error"));
const not_found_error_1 = __importDefault(require("./not-found.error"));
const unauthenticated_error_1 = __importDefault(require("./unauthenticated.error"));
exports.default = {
    CustomApiError: custom_api_error_1.default,
    BadRequestError: bad_request_error_1.default,
    NotFoundError: not_found_error_1.default,
    UnauthenticatedError: unauthenticated_error_1.default
};
//# sourceMappingURL=index.js.map