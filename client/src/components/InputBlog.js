import React, { Fragment, useState } from 'react';
import './InputBlog.css';
import ListBlogs from './ListBlogs';
import Timestamp from 'react-timestamp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


const InputBlog = () => {
     const [description, setDescription] = useState('');

     const onSubmitForm = async e => {
         e.preventDefault();
         try {
             const body = { description };
             const response = await fetch("/blogs", {
                 method: "POST",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify(body)
             });
             
             console.log(response);
             window.location = "/";
         } catch (err) {
             console.error(err.message);
         }
     };
    return(
        <Fragment>
            <h1>BlogLife</h1>
            <span className="timestamp"><Timestamp options={{ includeDay: true }} /></span>
            <div className="App">
                <form id="blog-entry-form" onSubmit={onSubmitForm}>
                    <input type="text" placeholder="Take a few moments to reflect on your day with two or three sentences." value={description} onChange={e => setDescription(e.target.value)} />
                    <button>Post</button>
                </form>
                <ListBlogs />
            </div>
        </Fragment>
    );
};

export default InputBlog;