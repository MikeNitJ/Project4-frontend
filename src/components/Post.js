import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "50%",
    color: "black",
  };
  return (
    <div style={div}>
      <Link to={`/scoreboard/${post.id}`}>
        <h3>{post.name}</h3>
      </Link>
      <h4>{post.score}</h4>
    </div>
  );
};

export default Post