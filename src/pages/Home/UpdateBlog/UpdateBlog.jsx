import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateBlog = () => {

    const blog = useLoaderData();
    const { title, image, short_description, _id, category } = blog;

    const handleAddBlog = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const image = form.image.value;
        const added = { title, description, category, service_id: _id, image };
        console.log(added);

        fetch('http://localhost:5000/singleBlog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(added)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast('Updated Successfully');
                }
            })
    }

    return (
        <div>
            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleAddBlog} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={short_description} className="input input-bordered" required />
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

export default UpdateBlog;