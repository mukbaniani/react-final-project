function PostListItem({ posts }) {
  return (
    <div className="card mt-4">
      <div className="card-header">title {posts.title} </div>
      <div className="card-body">
        <p className="card-text">{posts.body} </p>
      </div>
    </div>
  );
}

export default PostListItem;
