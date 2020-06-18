import React, { Fragment, useState, useEffect } from 'react';
import './ListBlogs.css';
 

const ListBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    // delete Blog function

    async function deleteBlog(id) {
        try {
            await fetch(`http://localhost:5000/blogs/${id}`, {
                method: "DELETE",
            });

            setBlogs(blogs.filter(blog => blog.blog_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    async function getBlogs() {
        const res = await fetch("http://localhost:5000/blogs");
        
        const blogArray = await res.json();

        setBlogs(blogArray);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    console.log(blogs);

    return (
        <Fragment>
            <div>
                {blogs.map(blog => (
                <div className="list">
                    <p>{blog.description}</p>
                    <button className="del-button" onClick={() => deleteBlog(blog.blog_id)}>Delete</button>
                 </div>
                ))}
                
            </div>
        </Fragment>
    )
};

export default ListBlogs;