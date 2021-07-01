import axios from 'axios';

export const getComments = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_COMMENT_URL}/?_start=1&_limit=10`,
    );
    return response.data;
  } catch (error) {
    console.trace(error);
    return [];
  }
};
