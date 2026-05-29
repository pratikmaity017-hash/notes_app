import React, { useEffect, useState } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      caption: "This is a sample caption for the post.",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res) => {
      
      setPosts(res.data.posts);
    });
  }, []);
  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </section>
  );
};

export default Feed;
