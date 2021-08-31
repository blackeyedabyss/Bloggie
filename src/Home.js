import BlogList from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {
    const { data : blogs, isPending, error } = useFetch('http://localhost:8000/blogs');  //The data is coming from the db.json file in the data folder. I'm using JSON-Server in order to fetch the data. npx json-server --watch .\src\data\db.json --port 8000

    return ( 
        <div className="home">
            {error && <div>{error}</div> }
            { isPending && <div> Loading... </div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;