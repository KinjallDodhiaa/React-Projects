import React from 'react';
import {connect} from 'react-redux'

const Description = (props) => {

  if(props.result.status==='SUCCESS' && props.result.selectedIndex !== -1){
    return <p dangerouslySetInnerHTML={{__html: props.result.data[props.result.selectedIndex].snippet}}>
    </p>

  }else{
    return null
  }

    

};


    const mapStateToProps = (state) => {
      return {
        result: state.results,
      };
    };

export default connect(mapStateToProps)(Description);