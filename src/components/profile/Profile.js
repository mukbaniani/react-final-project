import useFetch from '../../hook';
import UserPostItem from './UserPostItem';
import { IsAuthenicated } from '../../hoc/IsAuthenicated';

function PostList() {
  const {
    loading,
    data: response,
    error,
  } = useFetch(`${process.env.REACT_APP_API_URL}?_start=1&_limit=10`);
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
  return (
    <div className="container mt-4">
      <h2 className="text-center">your posts</h2>
      {response
        .filter((el) => el.userId === 1)
        .map((posts) => {
          return <UserPostItem posts={posts} key={posts.id} />;
        })}
    </div>
  );
}

export default IsAuthenicated(PostList);
