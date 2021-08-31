import { useState, useEffect } from "react";
import BlogList from "./Bloglist";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


// const handleDelete = (id) => {
//     // console.log(blogs);
//     const newBlogs = blogs.filter(blog => blog.id !== id);    
//     setBlogs(newBlogs);
// }


useEffect(() => {
    setTimeout(() => {
        fetch('  http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data from the database.');
            }
            return res.json();
        })
        .then((data) => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        // For handling Fetch related errors.
        .catch(err => { 
            setIsPending(false);
            setError(err.message)
        })
    }, 1000);
    
}, []); // The square brackets (known as empty dependency array) will make sure that the useEffect runs just once on the first render! It won't run when the state changes, else, without the brackets, the useEffect would've run again.
//The useEffect function will run for the state mentioned in the dependency array!

    return ( 
        <div className="home">
            {error && <div>{error}</div> }
            { isPending && <div> Loading... </div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Ushma S.')} title="Ushma's Blogs!"/> */}
        </div>
     );
}
 
export default Home;