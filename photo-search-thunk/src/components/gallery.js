
import React, { useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import {connect} from 'react-redux';

const Gallery = (props) => {

  const [state,setState]=useState({show:false, imgUrl: ''})

  const handleClose = () => setState({ show: false, imgUrl: '' });


  const previewOnClick =(url)=>{
    setState({show:true, imgUrl:url})

  }

  switch(props.result.status){
    case 'START':
      return <h1>LOADING...........</h1>
    case 'FAILED':
      return <h1>FAILED</h1>
    case 'SUCCESS':
      return (
        <div className="container">
          <div className="row">
            {props.result.data.map((element, index) => (
              <div key={index} className="card p-3" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  height="150"
                  src={element.previewURL}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{element.user}</h5>
                  <p className="card-text" style={{ minHeight: "70px" }}>
                    {element.tags}
                  </p>
                  <button
                    onClick={() => {
                      previewOnClick(element.largeImageURL);
                    }}
                    className="btn btn-primary"
                  >
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Modal size="lg" show={state.show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image fluid src={state.imgUrl} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
     default:
       return null;   
  }
};

const mapStateToProps=(state)=>{
  return{
    result:state.results
  }
}

export default connect(mapStateToProps)(Gallery);





















// import React from 'react';
// import {connect} from 'react-redux';
// import {selectIndexAction} from '../actions'

// const Gallery = (props) => {

//     const previewOnClick = (e,index) => {
//         e.preventDefault();
//         props.selectIndexAction(index);
//     }


//     switch (props.data.status) {
//     case "START":
//       return <h1>LOADING............</h1>;
//     //break;
//     case "FAILED":
//       return <h1>FAILED............</h1>;
//     //break;
//     case "SUCCESS":
//       return (
//         <div className="container">
//       <div className="row">
//         {props.data.data.map((element, index) => (
//           <div key={index} className="card p-3" style={{ width: "18rem" }}>
//             <img
//               className="card-img-top"
//               height="150"
//               src={element.previewURL}
//               alt="Card image cap"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{element.user}</h5>
//               <p className="card-text" style={{ minHeight: "70px" }}>
//                 {element.tags}
//               </p>
//               <button onClick={(e)=>{previewOnClick(e,index)}}
//                 className="btn btn-primary"
//               >
//                 Preview
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//       );
//     //break;
//     default:
//       return null;
//     //break;
//   }

// }

// const mapStateToProps = (state) => {
//     return {
//         data:state.results
//     }
// }

// export default connect(mapStateToProps,{ selectIndexAction })(Gallery);