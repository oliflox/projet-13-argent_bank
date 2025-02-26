export const ApiLogin = async (credentials) => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
  if (response.ok) {
    return { token: data.body.token };
  } else {
    throw new Error(data.message);
  }
};
