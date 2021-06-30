import Comments from '../../components/comments';
import { useParams } from 'react-router-dom';

function CommentPage(props) {
  const params = useParams();
  return <Comments post_id={params.post_id} />;
}

export default CommentPage;
