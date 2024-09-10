import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	isLoggedIn: boolean;
	isLoading: boolean;
	user: null | {
		id: string;
		username: string;
		email: string;
	};
}

const initialState: AuthState = {
	isLoggedIn: false,
	isLoading: false,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginStart(state) {
			state.isLoading = true;
		},
		loginSuccess(state, action: PayloadAction<AuthState["user"]>) {
			state.isLoggedIn = true;
			state.isLoading = false;
			state.user = action.payload;
		},
		loginFailure(state) {
			state.isLoading = false;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } =
	authSlice.actions;

export default authSlice.reducer;
