import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ListBlogs.css';
 

const ListBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    // delete Blog function

    async function deleteBlog(id) {
        try {
            await fetch(`/blogs/${id}`, {
                method: "DELETE",
            });

            setBlogs(blogs.filter(blog => blog.blog_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    async function getBlogs() {
        const res = await fetch("/blogs");
        
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
                    <span>
                        <FontAwesomeIcon className="faicons" icon='trash' onClick={() => deleteBlog(blog.blog_id)} />
                    </span>
                 </div>
                ))}
                
            </div>
        </Fragment>
    )
};

export default ListBlogs;