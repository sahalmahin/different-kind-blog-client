import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogsCard = ({ blog }) => {

    const { title, image, short_description, category, _id } = blog;

    const newBlog = { title, image, short_description, category };

    const handleAddBlog = () => {
        fetch('https://reset-assignment-11-server-v2.vercel.app/singleBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlog)
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
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
            <figure><img className="w-full h-44" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="badge badge-secondary">{title}</div>
                </h2>
                <p>{short_description}</p>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/detailPage/${_id}`}>
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