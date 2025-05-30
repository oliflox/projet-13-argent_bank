export const authApi = async (credentials) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
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