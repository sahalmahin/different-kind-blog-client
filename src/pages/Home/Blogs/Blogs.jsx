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
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 gap-4">
                {
                    blogs.slice(0, 6).map(blog => <BlogsCard key={blog._id} blog={blog}> </BlogsCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;