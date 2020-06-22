// make React available
import React from 'react';
import ReactDOM from 'react-dom';
import ListBlogs from './ListBlogs';

// this is the test case
it('renders List Blog component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ListBlogs />, div);

  ReactDOM.unmountComponentAtNode(div);
});