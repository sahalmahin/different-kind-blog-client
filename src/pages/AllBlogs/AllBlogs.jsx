import { useEffect, useState } from "react";
import AllBlogsCard from "./AllBlogsCard";

const AllBlogs = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/singleBlog')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])

    return (
        <div>
            <h4 className="text-8xl text-center">Here is our all Blogs: {allBlogs.length}</h4>
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 gap-4">
                {
                    allBlogs.map(allBlog => <AllBlogsCard key={allBlog._id} allBlog={allBlog}></AllBlogsCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;