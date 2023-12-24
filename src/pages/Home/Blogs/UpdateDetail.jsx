import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDetail = () => {

    const blog = useLoaderData();
    const { title, image, short_description, long_description, category, _id } = blog;

    const handleUpdateBlog = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.value;
        const description = form.description.value;
        const longDescription = form.longDescription.value;
        const updatedBlog = { title, description, category, longDescription, image };
        console.log(updatedBlog);

        fetch(`https://reset-assignment-11-server-v2.vercel.app/blogs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast('Updated Successfully');
                }
            })
    }

    return (
        <div>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                <form onSubmit={handleUpdateBlog} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" defaultValue={category} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Link</span>
                            </label>
                            <input type="link" name="image" defaultValue={image} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={short_description} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <input type="text" name="longDescription" defaultValue={long_description} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Update Blog" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateDetail;