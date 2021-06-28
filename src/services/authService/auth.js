export const login = async (creaditional) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(creaditional),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
