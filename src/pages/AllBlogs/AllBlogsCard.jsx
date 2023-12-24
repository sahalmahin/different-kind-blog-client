import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AllBlogsCard = ({ allBlog }) => {

    const { title, image, description, longDescription, category, _id } = allBlog;

    // const handleAddBlog = () => {
    //     fetch('http://localhost:5000/singleBlog', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(allBlog)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 toast('Added Successfully');
    //             }
    //         })
    // }

    return (
        <div className="card w-[400px] mb-10 bg-pink-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-44" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">
                    <div className="badge badge-secondary">{title}</div>
                </h2>
                <p className="font-bold">{description}</p>
                <p>{longDescription}</p>
                <p className="badge badge-secondary">{category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/blogDetail/${_id}`}>
                        <button className="btn btn-outline">Details</button>
                    </Link>
                    <button  className="btn btn-outline">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AllBlogsCard;