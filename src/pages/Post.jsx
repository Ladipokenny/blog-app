import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return <h1>Post Page - Showing post with ID: {id}</h1>;
}

export default Post;
