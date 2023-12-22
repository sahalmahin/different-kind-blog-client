import { Link, useLoaderData } from "react-router-dom";

const BlogDetail = () => {

    const blog = useLoaderData();

    const { title, image, short_description, _id } = blog;

    return (
        <div className="card bg-base-100 border shadow-xl">
            <div className="card-body">
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p>{short_description}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/updateBlog/${_id}`}>
                        <button className="btn btn-outline">Details</button>
                    </Link>
                </div>
            </div>
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
        </div>
    );
};

export default BlogDetail;