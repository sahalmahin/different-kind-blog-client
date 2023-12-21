const BlogsCard = ({ blog }) => {

    const { title, image, short_description, category } = blog;

    const handleAddBlog = () => {
        fetch(`http://localhost:5000/singleBlog/${blog._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                    <button className="btn btn-outline">Details</button>
                    <button onClick={() => handleAddBlog(blog)} className="btn btn-outline">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;