import { store } from '../store';

const baseUrl = import.meta.env.VITE_API_URL;
const endpoint = '/profile';

const getToken = () => store.getState().auth.token;

const getOptions = (method, body = null) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
  body: body ? JSON.stringify(body) : null,
});

export const userProfileApi = async () => {
  const options = getOptions('POST');
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    const data = await response.json();
    if (data.status === 200) {
      return data.body;
    } else {
      throw new Error(data.message || 'Failed to fetch user data');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const updateUserProfileApi = async (updatedUser) => {
  const options = getOptions('PUT', updatedUser);
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    const data = await response.json();
    
    if (data.status === 200) {
      const verifyResponse = await fetch(`${baseUrl}${endpoint}`, getOptions('POST'));
      const verifyData = await verifyResponse.json();
      
      if (verifyData.status === 200 && 
          verifyData.body.firstName === updatedUser.firstName && 
          verifyData.body.lastName === updatedUser.lastName) {
        return true;
      } else {
        throw new Error('Profile update verification failed');
      }
    } else {
      throw new Error(data.message || 'Failed to update profile');
    }
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
};
