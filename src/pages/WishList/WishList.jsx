import { useEffect, useState } from "react";
import WishListRow from "./WishListRow";
import Swal from 'sweetalert2'

const WishList = () => {

    const [singleBlog, setSingleBlog] = useState([]);

    const url = 'http://localhost:5000/singleBlog';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleBlog(data))
    }, [])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/singleBlog/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0 || data.deletedCount < 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = singleBlog.filter(blog => blog._id !== id);
                            setSingleBlog(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h3 className="text-4xl">Your Blog is Here : {singleBlog.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleBlog.map(blog => <WishListRow
                                key={blog._id}
                                blog={blog}
                                handleDelete={handleDelete}
                            ></WishListRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;