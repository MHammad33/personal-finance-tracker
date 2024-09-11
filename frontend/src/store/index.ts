import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import transactionSlice from "./slices/transactionSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		transactions: transactionSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
