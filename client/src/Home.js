import React, { Fragment } from 'react';
import './Home.css';
import InputBlog from './components/InputBlog';


function App() {
  return( 
  <Fragment>
    <div className="container">
      <InputBlog />
    </div>
  </Fragment>
  );
}

export default App;