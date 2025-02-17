import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  const response = await fakeApiLogin(credentials);
  if (response.token) {
    return response.token;
  } else {
    return rejectWithValue('Invalid username or password');
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await fakeApiLogout();
});

const fakeApiLogin = async (credentials) => {
  const { username, password } = credentials;
  if (username === 'specificUsername' && password === 'specificPassword') {
    return { token: 'fake-token' };
  } else {
    return {};
  }
};

const fakeApiLogout = async () => {
  // Simulate API call
};
