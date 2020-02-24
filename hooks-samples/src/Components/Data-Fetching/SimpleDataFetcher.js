import React, { useState, useEffect } from "react";
import axios from "axios";

function SimpleDataFetcher() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(exception => {
        console.log(exception);
      });
  }, []);
  return (
    <div>
      {Posts.map(post => (
        <ul>
          <li key={post.id}>{post.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default SimpleDataFetcher;
