import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogsCard = ({ blog }) => {

    const { title, image, short_description, category, _id } = blog;

    const handleAddBlog = () => {
        fetch('http://localhost:5000/singleBlog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('Added Successfully');
                }
            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-44" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="badge badge-secondary">{title}</div>
                </h2>
                <p>{short_description}</p>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/blogDetail/${_id}`}>
                        <button className="btn btn-outline">Details</button>
                    </Link>
                    <button onClick={handleAddBlog} className="btn btn-outline">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BlogsCard;