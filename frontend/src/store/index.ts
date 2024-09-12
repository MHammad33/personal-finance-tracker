import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import transactionReducer from "./slices/transactionSlice";
import loadingReducer from "./slices/loadingSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		transactions: transactionReducer,
		loading: loadingReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
