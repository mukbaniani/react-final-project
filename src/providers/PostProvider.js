import React, { useEffect, useState } from 'react';
import { postService } from '../services/postService/posts';

export const PostProvider = React.createContext(null);

function PostProviderComponent({ children }) {
  const [post, setPost] = useState([]);

  const loadPosts = async () => {
    const result = await postService();
    setPost(result);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <PostProvider.Provider value={{ post }}>{children}</PostProvider.Provider>
  );
}

export default PostProviderComponent;
