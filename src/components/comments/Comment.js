import { useContext } from 'react';
import { PostProvider } from '../../providers/PostProvider';
import { useState } from 'react';

function Comments({ post_id }) {
  const id = parseInt(post_id);
  const [comment, setComment] = useState('');
  const { commentList, addComment } = useContext(PostProvider);

  const onSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      postId: id,
      id: Math.random().toString(),
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: comment,
    };
    addComment(newComment);
    setComment('');
  };

  return (
    <div className="container">
      {commentList
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
