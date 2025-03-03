import { store } from '../store';

const baseUrl = 'http://localhost:3001';
const endpoint = '/api/v1/user/profile';

const getToken = () => store.getState().auth.token;

const getOptions = (method, body = null) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
  body: body ? JSON.stringify(body) : null,
});

export const apiProfileCall = async () => {
  const options = getOptions('POST');
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
  const options = getOptions('PUT', updatedUser);
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
