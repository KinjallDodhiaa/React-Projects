import React, { useRef } from 'react';
import {connect} from 'react-redux';
import { Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import { insertAction } from "../actions";


const Searchbar = (props) => {
    console.log('searchbar', props);

    const searchInpRef = useRef();

    const searchBtnClick = () => {
        //console.log(searchRef.current.value);
        props.dispatch(insertAction(searchInpRef.current.value))
        // dispatch will:
        // 1- run the action and get the result
        // 2- change the main state depending on the action type
        // 3- rerender ANY components connected to the main state 
    }

    return (
      <Container>
        <Row>
          <InputGroup className="mb-3 mt-3">
            <InputGroup.Prepend>
              <Button onClick={searchBtnClick} variant="outline-secondary">
                Search
              </Button>
            </InputGroup.Prepend>
            <FormControl ref={searchInpRef} aria-describedby="basic-addon1" />
          </InputGroup>
        </Row>
      </Container>
    );
};



export default connect(null, null)(Searchbar);