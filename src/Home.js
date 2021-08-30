import { useState, useEffect } from "react";
import BlogList from "./Bloglist";


const Home = () => {
    const [blogs, setBlogs] = useState(null);


const handleDelete = (id) => {
    // console.log(blogs);
    const newBlogs = blogs.filter(blog => blog.id !== id);    
    setBlogs(newBlogs);
}


useEffect(() => {
    fetch('  http://localhost:8000/blogs')
    .then(res => {
        return res.json();
    })
    .then((data) => {
        setBlogs(data);
    })    
}, []); // The square brackets (known as empty dependency array) will make sure that the useEffect runs just once on the first render! It won't run when the state changes, else, without the brackets, the useEffect would've run again.
//The useEffect function will run for the state mentioned in the dependency array!

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Ushma S.')} title="Ushma's Blogs!"/> */}
        </div>
     );
}
 
export default Home;