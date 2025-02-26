import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiLogin } from '../features/apiLoginCalls';

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await ApiLogin(credentials);
    return response.token;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
});