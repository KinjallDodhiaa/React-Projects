import { combineReducers } from "redux";

let searchResults = {
    data:[],
    status:'',
    selectedIndex: -1
};

const resultReducer = (results = searchResults, action) => {

    console.log(action);

    switch(action.type){
        case 'START':
            searchResults = { data: [], status: "START", selectedIndex: -1 };
            return{...searchResults};
        case 'SUCCESS':
            searchResults = {
              data: action.payload.hits,
              status: "SUCCESS",
              selectedIndex: -1,
            };
            return {...searchResults};
        case 'FAILED':
            searchResults = { data: [], status: "FAILED", selectedIndex: -1 };
            return {...searchResults};
        case 'SELECT_INDEX':
            searchResults.selectedIndex=action.payload;
            return {...searchResults}
        default:
            return results;
    }

  
};

export default combineReducers({
  results: resultReducer,
});



















// import {combineReducers} from 'redux';

// let searchResults = {
//     data:[],
//     status: '',
//     selectedIndex: -1
// }

// const resultReducer = (results=searchResults,action)=>{
//     console.log(action);
//     switch(action.type) {
//         case 'START':
//             searchResults={data: [],status:'START', selectedIndex: -1}
//             return{...searchResults};
//         case 'SUCCESS':
//             searchResults={data: action.payload.hits, status: 'SUCCESS', selectedIndex: -1}
//             return {...searchResults};
//         case 'FAILED':
//             searchResults={data: [],status:'FAILED',selectedIndex: -1}
//             return {...searchResults};
//         case 'SELECT_INDEX':
//             searchResults.selectedIndex=action.payload
//             return{...searchResults}
//         default:
//             return results;

//     }
    
// }


// export default combineReducers({
//     results: resultReducer
// })