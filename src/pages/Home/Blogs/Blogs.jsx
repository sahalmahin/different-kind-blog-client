import { useEffect, useState } from "react";
import BlogsCard from "../BlogsCard/BlogsCard";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h3 className="text-5xl font-bold text-center my-20 ">Our Recent Blogs!</h3>
            <div className="grid grid-cols-3">
                {
                    blogs.slice(0, 6).map(blog => <BlogsCard key={blog._id} blog={blog}> </BlogsCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;