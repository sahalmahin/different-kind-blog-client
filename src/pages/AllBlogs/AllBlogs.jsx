import AllBlogsCard from "./AllBlogsCard";
import { useLoaderData } from "react-router-dom";

const AllBlogs = () => {

    const allBlogs = useLoaderData();

    return (
        <div>
            <h4 className="text-8xl text-center my-10">Here is Your Added Blogs</h4>
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 gap-4">
                {
                    allBlogs.map(allBlog => <AllBlogsCard key={allBlog._id} allBlog={allBlog}></AllBlogsCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;