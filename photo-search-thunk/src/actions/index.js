import {getPhotos} from '../api';

export const insertAction =(text)=>{
  
  return (dispatch)=>{
    dispatch({
      type:'START',
      payload:null
    })
    getPhotos(text).then(data=>{
      dispatch({
        type:'SUCCESS',
        payload:data
      })
    }).catch(error=>{
      dispatch({
        type:'FAILED',
        payload:error
      })
    })
  }
}


export const selectIndex =(index)=>{
  return {
    type:'SELECT_INDEX',
    payload:index
  }
}








// import { getPhotos } from '../api';

// export const insertAction = (text) => {
//   return (dispatch) => {
//     dispatch({
//       type: "START",
//       payload: null,
//     });
//     getPhotos(text)
//       .then((data) => {
//         dispatch({
//           type: "SUCCESS",
//           payload: data,
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: "FAILED",
//           payload: error,
//         });
//       });
//   };
// };

// export const selectIndexAction = (index) => {
//   return {
//     type: "SELECT_INDEX",
//     payload: index,
//   };
// };

