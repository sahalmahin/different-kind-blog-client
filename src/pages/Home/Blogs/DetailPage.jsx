import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Comment from "./Comment";

const DetailPage = () => {

    const blog = useLoaderData();
    const { title, image, short_description, long_description, category, _id } = blog;
    const [comments, setComment] = useState([]);

    useEffect(() => {
        fetch('https://reset-assignment-11-server-v2.vercel.app/users')
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const form = event.target;
        const text = form.text.value;
        const comment = { text };
        console.log(comment);
        fetch('https://reset-assignment-11-server-v2.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('comment added');
                    form.reset();
                }
            })

    }

    return (
        <div>
            <div className="card bg-base-100 border shadow-xl">
                <div className="card-body">
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p className="font-bold">{short_description}</p>
                        <p>{long_description}</p>
                        <p className="badge badge-secondary">{category}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/updateDetail/${_id}`}>
                            <button className="btn btn-outline">Update</button>
                        </Link>
                    </div>
                </div>
                <figure><img className="w-full" src={image} /></figure>
            </div>
            <div className="my-32">
                <h3 className="text-5xl font-bold text-center">Comment Below</h3>
                <div className="flex items-center justify-center mt-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input type="text" name='text' placeholder="Write comment" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
            <p className="font-bold text-2xl">Comment Section :</p>
            <div className="text-xl font-semibold text-pink-700">
            {
                comments.map(comment => <Comment key={comment._id} comment={comment}></Comment>)
            }
            </div>
        </div>
    );
};

export default DetailPage;