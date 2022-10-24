import axios from "axios";
import React, { useEffect, useState } from "react";

const User = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (props.user.id === props.activeId) {
      const getData = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${props.activeId}`
        );
        return res.data;
      };

      getData().then((posts) => setPosts(posts));
    }else setPosts([])
  }, [props.activeId]);
  return (
    <div className="child">
      <h3>
        nom: {props.user.name} {props.user.username}
      </h3>
      <p>email:{props.user.email}</p>
      <p>
        ville:{props.user.address.city}
        rue:{props.user.address.street}
      </p>
      <button onClick={props.changeActiveId}>details posts</button>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
