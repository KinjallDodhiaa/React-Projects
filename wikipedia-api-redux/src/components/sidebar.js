import React from "react";
import { connect } from "react-redux";
import {selectIndexAction} from '../actions'

const Sidebar = (props) => {

    const titleClick = (e,index) => {
        e.preventDefault();
        props.selectIndexAction(index);
        
    }
  switch (props.data.status) {
    case "START":
      return <h1>LOADING............</h1>;
    //break;
    case "FAILED":
      return <h1>FAILED............</h1>;
    //break;
    case "SUCCESS":
      return (
        <ul>
          {props.data.data.map((elem, index) => (
            <li key={index}>
              <a href="#" onClick={(e)=>{titleClick(e,index)}}>{elem.title}</a>
            </li>
          ))}
        </ul>
      );
    //break;
    default:
      return null;
    //break;
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.results,
  };
};

export default connect(mapStateToProps, { selectIndexAction })(Sidebar);
