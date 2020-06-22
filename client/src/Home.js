import React, { Fragment } from 'react';
import './Home.css';
import InputBlog from './components/InputBlog';


function Home() {
  return( 
  <Fragment>
    <div className="container">
      <InputBlog />
    </div>
  </Fragment>
  );
}

export default Home;