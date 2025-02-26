const getUser = async () => {
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
    console.log('Status:', data.status);
    console.log('Message:', data.message);
    console.log('User ID:', data.body.id);
    console.log('User Email:', data.body.email);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

export { getUser };
