import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

class Posts extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts");
      const posts = await response.json();
      console.log(posts);

      // Update the state with the fetched data
      this.setState({ data: posts });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <ul>
          {data.map((item) => (
            <li className="list-item" key={uuidv4()}>
              <h3>{item.title}</h3>
              <p>
                {item.content.slice(0, 100)}
                {item.content.length > 20 ? "..." : ""}
              </p>
              <p>
                <span className="posted-by">Posted by</span> : {item.user_name}
              </p>
              <button className="view-btn" type="button">
                View Post
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
