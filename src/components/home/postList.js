import { useContext } from 'react';
import { PostProvider } from '../../providers/PostProvider';
import PostListItem from './postListItem';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
import { useState } from 'react';

function PostList() {
  const authed = useSelector(authSelector);
  const { post, addPost } = useContext(PostProvider);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addPost({
      title,
      body,
      id: Math.random().toString(),
      like: 0,
    });
  };

  return (
    <div className="container mt-4">
      {authed ? (
        <div>
          <h4>დაამატეთ პოსტი</h4>
          <form onSubmit={onSubmit}>
            <input
              className="form-control mt-4"
              placeholder="სათაური"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <input
              className="form-control mt-4"
              placeholder="პოსტი"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            />
            <button className="btn btn-primary text-center mt-2">
              დამატება
            </button>
          </form>
        </div>
      ) : null}
      {post.map((posts) => {
        return <PostListItem posts={posts} key={posts.id} />;
      })}
    </div>
  );
}

export default PostList;
