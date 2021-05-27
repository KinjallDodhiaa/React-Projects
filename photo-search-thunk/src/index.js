import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

import SearchBar from './components/searchbar'
import Gallery from './components/gallery'


const App = () => {
  return (
    <div>
    <SearchBar/>
    <Gallery/>
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware} from 'redux'

// import reducers from "./reducers";

// import SearchBar from './components/searchbar';
// import Gallery from './components/gallery';
// import Preview from './components/preview';


// const App = () => {
//     return (
//       <div>
//         <SearchBar />
//         <Preview />
//         <Gallery />
//       </div>
//     );
// };

// ReactDOM.render(
//     <Provider store={createStore(reducers, applyMiddleware(thunk))}>
//         <App/>
//     </Provider>,document.getElementById('root')
// )

