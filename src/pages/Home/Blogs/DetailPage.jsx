import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const DetailPage = () => {
    const blog = useLoaderData();

    const { title, image, short_description, long_description, category,_id } = blog;

    const handleSubmit = e => {
        e.preventDefault();
        const form = event.target;
        const text = form.text.value;
        console.log(text);
        if (text) {
            toast('Done');
            form.reset();
        }
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
        </div>
    );
};

export default DetailPage;