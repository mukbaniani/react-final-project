import { useContext } from 'react';
import { PostProvider } from '../../providers/PostProvider';
import UserPostItem from './UserPostItem';
import { IsAuthenicated } from '../../hoc/IsAuthenicated';

function PostList() {
  const { userPost } = useContext(PostProvider);
  console.log(userPost);
  return (
    <div className="container mt-4">
      <h2 className="text-center">your posts</h2>
      {userPost.map((posts) => {
        return <UserPostItem posts={posts} key={posts.id} />;
      })}
    </div>
  );
}

export default IsAuthenicated(PostList);
