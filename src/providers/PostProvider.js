import React, { useEffect, useState } from 'react';
import { postService } from '../services/postService/posts';
import { getComments } from '../services/postService/commentList';

export const PostProvider = React.createContext(null);

function PostProviderComponent({ children }) {
  const [post, setPost] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const loadPosts = async () => {
    const result = await postService();
    setPost(result);
  };

  const loadcommentsPosts = async () => {
    const result = await getComments();
    setCommentList(result);
  };

  const addPost = (newPost) => {
    setPost([...post, newPost]);
  };

  const addComment = (newComment) => {
    setCommentList([...commentList, newComment]);
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
    loadcommentsPosts();
  }, []);

  return (
    <PostProvider.Provider
      value={{ post, onLike, addPost, commentList, addComment }}>
      {children}
    </PostProvider.Provider>
  );
}

export default PostProviderComponent;
