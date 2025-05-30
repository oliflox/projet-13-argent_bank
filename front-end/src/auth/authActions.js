import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await authApi(credentials);
    return response.token;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  dispatch({ type: 'auth/logout' });
});