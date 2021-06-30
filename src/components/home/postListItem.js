import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/selectors';
import { useContext } from 'react';
import { PostProvider } from '../../providers/PostProvider';
import { NavLink } from 'react-router-dom';
import { COMMENT_PAGE } from '../../utils/routes';

function PostListItem({ posts }) {
  const authed = useSelector(authSelector);
  const { onLike } = useContext(PostProvider);
  return (
    <div className="card mt-4">
      <div className="card-header">title {posts.title} </div>
      <div className="card-body">
        <p className="card-text">{posts.body} </p>
      </div>
      {authed ? (
        <div>
          <button
            className="btn"
            onClick={() => {
              onLike(posts);
            }}>
            <i className="far fa-thumbs-up">like {posts.like}</i>
          </button>
        </div>
      ) : null}
      <NavLink className="btn btn-primary" to={`${COMMENT_PAGE}/${posts.id}`}>
        პოსტის კომენტარები
      </NavLink>
    </div>
  );
}

export default PostListItem;
