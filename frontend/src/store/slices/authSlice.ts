import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	isLoggedIn: boolean;
	isLoading: boolean;
	user: null | {
		username: string;
	};
	token: string | null;
}

const initialState: AuthState = {
	isLoggedIn: false,
	isLoading: false,
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginStart(state) {
			state.isLoading = true;
		},
		loginSuccess(
			state,
			action: PayloadAction<{ token: string; username: string }>
		) {
			state.isLoggedIn = true;
			state.isLoading = false;
			state.user = { username: action.payload.username };
			state.token = action.payload.token;
		},
		loginFailure(state) {
			state.isLoading = false;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = null;
			state.token = null;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } =
	authSlice.actions;

export default authSlice.reducer;
