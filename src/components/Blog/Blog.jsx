import React from "react";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog,handleBookMark }) => {
  // console.log(blog);

  const { cover, title, author_img, author, hashtags } = blog;

  return (
    <div>
      <div className="card bg-base-100 h-96 shadow-sm">
        <figure>
          <img className="object-cover h-52" src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-around gap-2">
            <img className="w-16" src={author_img} alt="" />
            <h2 className="font-bold">{author}</h2>
            <button onClick={()=>handleBookMark(blog)}><FaBookmark size={25} color="red" /></button>
          </div>
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
         <div className="flex">
         {
            hashtags.map(has=><p key={has} className="font-bold">{has}</p>)
          }
         </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Reading Times</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
