import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, LoginResponse } from '../../types';

const initialState: UserState = {
  user: null,
  token: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    authenticateUser: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { authenticateUser, logout } = authSlice.actions;
export default authSlice.reducer;
