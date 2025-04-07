import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark,handleReadCount }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl my-2 font-bold">Blogs:{blogs.length}</h1>
      <div className="grid grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Blog
            handleBookMark={handleBookMark}
            handleReadCount={handleReadCount}
            key={blog.id}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
