
import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
  
 <Navbar></Navbar>
  <div className='flex  p-10'>
    <div className='w-[70%]'>
    <Blogs></Blogs>
    </div>
    <div className='w-[30%] ml-12 bg-gray-300 rounded-2xl p-6'>
     <h1 className='font-bold'>Reading Time: 0</h1>
     <h2 className='font-bold'>Book mark Count: 0</h2>
    </div>
  </div>
    </>
  )
}

export default App
