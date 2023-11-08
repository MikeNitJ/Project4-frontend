import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const scoreboard = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <h1>
    Scoreboard
    </h1>
  {scoreboard.map((post) => <Post post={post} key={post.id} />)}
  <div style={{textAlign: "center"}}>
  <h4>Create New Score</h4>
  <div className="form-holder-div" >
  <Form className="form-holder" action="/create" method="post">
      <input type="text" name="name" placeholder="Name"/>
      <input type="text" name="score" placeholder="Score"/>
      <button className="button-46">Create New Score</button>
  </Form>
  </div>
  </div>
  </>;
};

export default Index;