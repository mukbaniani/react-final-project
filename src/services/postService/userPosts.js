import axios from 'axios';

export const getUserPosts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}?_start=1&_limit=10`,
    );
    return response.data.filter((el) => el.userId === 1);
  } catch (error) {
    console.trace(error);
    return [];
  }
};
