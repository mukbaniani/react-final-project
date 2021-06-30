import React, { useEffect, useState } from 'react';
import { postService } from '../services/postService/posts';
import { getUserPosts } from '../services/postService/userPosts';

export const PostProvider = React.createContext(null);

function PostProviderComponent({ children }) {
  const [post, setPost] = useState([]);
  const [userPost, setUserPost] = useState([]);

  const loadPosts = async () => {
    const result = await postService();
    setPost(result);
  };

  const loadUserPosts = async () => {
    const result = await getUserPosts();
    setUserPost(result);
  };

  const addPost = (newPost) => {
    setPost([...post, newPost]);
  };

  const onLike = (posts) => {
    const index = post.findIndex((el) => el.id === posts.id);
    const newState = [
      ...post.slice(0, index),
      {
        ...posts,
        like: (posts.like += 1),
      },
      ...post.slice(index + 1),
    ];
    setPost(newState);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    loadUserPosts();
  }, []);

  return (
    <PostProvider.Provider value={{ post, onLike, addPost, userPost }}>
      {children}
    </PostProvider.Provider>
  );
}

export default PostProviderComponent;
