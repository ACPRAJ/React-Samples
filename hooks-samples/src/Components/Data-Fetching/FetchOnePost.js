import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchOnePost() {
  const [Post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [IdFromButtonClick, setIdFromButtonClick] = useState(1);

  const fetchPost = () => {
    if (id <= 0) {
      setPost("");
      return;
    }
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log(response);
        setPost(response.data);
      })
      .catch(exception => {
        console.log(exception);
      });
  };

  useEffect(fetchPost, [IdFromButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={event => setId(event.target.value)}
      />
      <button onClick={() => setIdFromButtonClick(id)}>Fetch Post</button>
      <h3>{Post.title}</h3>
    </div>
  );
}

export default FetchOnePost;
