import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.score}</h2>
      <div style={{ textAlign: "center" }}>
        <h4>Update a score</h4>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="write name here"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="score"
            placeholder="Score "
            defaultValue={post.score}
          />
          <button className="button-45">Update score</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button className="button-45">Delete score</button>
        </Form>
      </div>
      <Link to="/scoreboard">
        <button className="button-45">Back To Scoreboard</button>
      </Link>
      <Link to="/">
        <button className="button-45">Back To Hangman</button>
      </Link>
    </div>
  );
};

export default Show;