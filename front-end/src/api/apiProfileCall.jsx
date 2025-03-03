import { store } from '../store';

export const apiProfileCall = async () => {
  const baseUrl = 'http://localhost:3001';
  const endpoint = '/api/v1/user/profile';
  const token = store.getState().auth.token;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    const data = await response.json();
    if (data.status === 200) {
      return data.body;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export const apiUpdateProfileCall = async (updatedUser) => {
  const baseUrl = 'http://localhost:3001';
  const endpoint = '/api/v1/user/profile';
  const token = store.getState().auth.token;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedUser),
  };

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    const data = await response.json();
    if (data.status === 200) {
      return true;
    } else {
      console.error('Error:', data.message);
      return false;
    }
  } catch (error) {
    console.error('Error updating user data:', error);
    return false;
  }
};
