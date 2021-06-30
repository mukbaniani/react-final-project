export const postService = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}?_start=1&_limit=10`,
    );
    const result = await response.json();
    return result.map((v) => ({ ...v, like: 0 }));
  } catch (error) {
    console.log(error);
  }
};
