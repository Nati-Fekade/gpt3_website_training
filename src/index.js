import React from 'react';
import ReactDOM from 'react-dom'; // this is going to allow us to hook our react application to our index.html

import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); // this App component is going to be rendered inside index.html with div ID of root