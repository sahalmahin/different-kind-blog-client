import React from 'react';

const WishListRow = ({ blog }) => {

    const { image, short_description, title, category } = blog;
    
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={image} alt="" />
                        {/* {img && <img src={img} alt="" />} */}
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>
                {short_description}
            </td>
            <td>
                {category}
            </td>
        </tr>
    );
};

export default WishListRow;