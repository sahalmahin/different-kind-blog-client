// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";

import { useEffect, useState } from "react";
import WishListRow from "./WishListRow";

const WishList = () => {

    // const { user } = useContext(AuthContext);
    const [singleBlog, setSingleBlog] = useState([]);

    const url = 'http://localhost:5000/singleBlog';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleBlog(data))
    }, [])
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
                            ></WishListRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;