import { useContext } from 'react';
import { PostProvider } from '../../providers/PostProvider';
import PostListItem from './postListItem';

function PostList() {
  const { post } = useContext(PostProvider);
  return (
    <div className="container mt-4">
      <h4>დაამატეთ პოსტი</h4>
      <form>
        <input className="form-control mt-4" placeholder="სათაური" />
        <input className="form-control mt-4" placeholder="პოსტი" />
        <button className="btn btn-primary text-center mt-2">დამატება</button>
      </form>
      {post.map((posts) => {
        return <PostListItem posts={posts} key={posts.id} />;
      })}
    </div>
  );
}

export default PostList;
