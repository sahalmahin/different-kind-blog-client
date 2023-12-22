import { useLoaderData } from "react-router-dom";

const BlogDetail = () => {

    const blog = useLoaderData();

    const { title, image, short_description } = blog;

    return (
        <div className="card bg-base-100 border shadow-xl">
            <div className="card-body">
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p>{short_description}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary font-bold">Update</button>
                </div>
            </div>
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
        </div>
    );
};

export default BlogDetail;