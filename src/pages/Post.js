import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  return (
    <div>
      <h1>post(#{params.postId})</h1>
    </div>
  );
};

export default Post;
