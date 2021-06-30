import useFetch from '../../hook';
import { useState } from 'react';

function Comments({ post_id }) {
  const id = parseInt(post_id);
  const [comment, setComment] = useState('');

  const {
    loading,
    data: response,
    error,
  } = useFetch(`${process.env.REACT_APP_COMMENT_URL}?_start=1&_limit=10`);
  if (loading) {
    return (
      <div className="row">
        <h2>loading</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger">
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      postId: id,
      id: Math.random().toString(),
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: comment,
    };
    response.push(newComment);
  };

  return (
    <div className="container">
      {response
        .filter((el) => el.postId === id)
        .map((comments) => {
          return (
            <div className="text-center" key={comments.id}>
              <article className="mt-4">{comments.body}</article>
              <hr />
            </div>
          );
        })}
      <form onSubmit={onSubmit}>
        <textarea
          className="form-control mt-2"
          placeholder="comment"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}></textarea>
        <button className="btn btn-primary text-center mt-2">
          add comment
        </button>
      </form>
    </div>
  );
}

export default Comments;
