import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {insertAction} from '../actions'

const Searchbar = (props) => {

  const searchInpRef = useRef();

  const searchInpOnClick =()=>{
    props.insertAction(searchInpRef.current.value)
    searchInpRef.current.value='';
  }

  return (
       <div className="container">
         <div className="row">
           <div className="input-group mb-3 mt-3 ">
             <div className="input-group-prepend">
               <button
                 onClick={searchInpOnClick}
                 className="btn btn-outline-secondary"
                 type="button"
               >
                 Search
               </button>
             </div>
             <input
               ref = {searchInpRef}
               type="text"
               className="form-control"
               placeholder="Search Word"
               aria-label=""
               aria-describedby="basic-addon1"
             />
           </div>
         </div>
       </div>

    );
};

export default connect(null,{insertAction})(Searchbar);
























// import React, { useRef } from 'react';
// import {connect} from 'react-redux';
// import {insertAction} from '../actions';

// const SearchBar = (props) => {

//     const searchInpRef = useRef();

//     const searchInpOnClick =() =>{
//         props.dispatch(insertAction(searchInpRef.current.value))
//     }

//     return (
//       <div className="container">
//         <div className="row">
//           <div className="input-group mb-3 mt-3 ">
//             <div className="input-group-prepend">
//               <button
//                 onClick={searchInpOnClick}
//                 className="btn btn-outline-secondary"
//                 type="button"
//               >
//                 Search
//               </button>
//             </div>
//             <input
//               ref = {searchInpRef}
//               type="text"
//               className="form-control"
//               placeholder="Search Word"
//               aria-label=""
//               aria-describedby="basic-addon1"
//             />
//           </div>
//         </div>
//       </div>
//     );
// };

// export default connect(null)(SearchBar);