import { useState } from "react";
import "./App.css";
// import Blog from "./components/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";


function App() {
  let [bookMark, setBookMark] = useState([]);
  const [readCount, setReadCount] = useState(0)
    
  const handleReadCount = (time,id) =>{
     const number = parseInt(time)
     setReadCount(parseInt(readCount+number))
     handleRemoveBookMark(id)
  }

  const handleRemoveBookMark = (id) =>{
    const removeremaining = bookMark.filter(mark=> mark.id !== id)
    setBookMark(removeremaining)
  }

  const handleBookMark = (blog) => {
    const newBlogs = [...bookMark, blog];
    setBookMark(newBlogs);

   
  };

  // console.log(bookMark);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex  p-10">
        <div className="w-[70%]">
          <Blogs handleReadCount={handleReadCount} handleBookMark={handleBookMark}></Blogs>
        </div>

        <div className="w-[30%] ml-12 bg-gray-300 rounded-2xl p-6">
          <h1 className="font-bold">Reading Time: {readCount}</h1>
          <h2 className="font-bold">Book mark Count:{bookMark.length} </h2>

          {bookMark.map((mark) => (
            <h3
              className="bg-red-500 text-white rounded-2xl font-bold p-2 my-3"
              key={mark.id}
            >
              {mark.title}
            </h3>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
