import 'ka-table/style.css';
import React, { useEffect, useState } from 'react';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';

const FeaturedBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://reset-assignment-11-server-v2.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const topTenBlogs = blogs
        .filter(blog => blog.long_description && blog.long_description.length > 30)
        .slice(0, 10);

    const dataArray = topTenBlogs.map((blog, index) => ({
        column1: `column:1 row:${index}`,
        column2: `column:2 row:${index}`,
        column3: `column:3 row:${index}`,
        column4: `column:4 row:${index}`,
        ...blog,
        id: index,
    }));

    return (
        <Table
            columns={[
                { key: 'title', title: 'Title', dataType: DataType.String },
                { key: 'short_description', title: 'Short Description', dataType: DataType.String },
                { key: 'long_description', title: 'Long Description', dataType: DataType.String },
                { key: 'category', title: 'Category', dataType: DataType.String },
            ]}
            data={dataArray}
            editingMode={EditingMode.Cell}
            rowKeyField={'id'}
            sortingMode={SortingMode.Single}
        />
    );
};

export default FeaturedBlogs;
