import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchOnePost() {
  const [Post, setPost] = useState({});
  const [Id, setId] = useState(1);
  const [IdFromButtonClick, setIdFromButtonClick] = useState(1);

  const fetchPost = () => {
    if (Id <= 0) {
      setPost("");
      return;
    }
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
      .then(response => {
        console.log(response);
        setPost(response.data);
      })
      .catch(exception => {
        console.log(exception);
      });
    //   .finally(() => {
    //     setCanFetch(false);
    //   });
  };

  useEffect(fetchPost, [IdFromButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={Id}
        onChange={event => setId(event.target.value)}
      />
      <button onClick={() => setIdFromButtonClick(Id)}>Fetch Post</button>
      <h3>{Post.title}</h3>
    </div>
  );
}

export default FetchOnePost;
