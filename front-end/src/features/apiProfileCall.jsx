const apiProfileCall = async () => {
  const baseUrl = 'http://localhost:3001';
  const endpoint = '/api/v1/user/profile';
  const token = localStorage.getItem('token');

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
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

export { apiProfileCall };
