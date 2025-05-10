import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
// import { authApiSlice } from './api/authApiSlice';
// import { commentsApiSlice } from './api/commentsApiSlice';
// import { friendsApiSlice } from './api/friendsApiSlice';
// import { postsApiSlice } from './api/postsApiSlice';
// import authReducer from './reducers/authReducer';
import authReducer from '../features/auth/authSlice'; // Import the auth slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Authentication state, not inside the [] to manually add key to the reducer
    [baseApi.reducerPath]: baseApi.reducer, // Base API reducer
    // [authApiSlice.reducerPath]: authApiSlice.reducer, // Auth API reducer
    // [commentsApiSlice.reducerPath]: commentsApiSlice.reducer, // Comments API reducer
    // [friendsApiSlice.reducerPath]: friendsApiSlice.reducer, // Friends API reducer
    // [postsApiSlice.reducerPath]: postsApiSlice.reducer, // Posts API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      baseApi.middleware
      // authApiSlice.middleware,
      // commentsApiSlice.middleware,
      // friendsApiSlice.middleware,
      // postsApiSlice.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
