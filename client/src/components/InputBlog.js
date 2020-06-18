import React, { Fragment, useState } from 'react';
import './InputBlog.css';
import ListBlogs from './ListBlogs';
import Timestamp from 'react-timestamp';


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
             // window.location = "/";
         } catch (err) {
             console.error(err.message);
         }
     };
    return(
        <Fragment>
            <h1>BlogLife</h1>
            <span className="timestamp">Currently: <Timestamp options={{ includeDay: true }} /></span>
            <div className="App">
                <form id="blog-entry-form" onSubmit={onSubmitForm}>
                    <input type="text" placeholder="How was your day?" value={description} onChange={e => setDescription(e.target.value)} />
                    <button>Post</button>
                </form>
                <ListBlogs />
            </div>
        </Fragment>
    );
};

export default InputBlog;