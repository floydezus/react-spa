import React, { useState, useEffect } from 'react';
import { HTMLTable, InputGroup, Spinner, Button, Navbar } from "@blueprintjs/core";
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const { data } = state;
  const props = {
    data
  };
  return props;
};

const actionCreators = {
  addData: actions.addData,
};

const buttonAddStyle = {
  // backgroundColor: "#39c",
  marginLeft: "15px",
  borderRadius: "0px",
}

const inputStyle = {
  backgroundColor: "#66c",
  borderRadius: "0px",
}


const MyTable = ({
  addData,
  data
}) => {

 

  const [status, setStatus] = useState('idle');
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    setStatus('working');
    return () => {
      setStatus('idle');
    };
  }, []);

  const handlerAddData = () => {
    console.log('handlerAddData');
    addData();
  }

  const handleChangeText = ({target}) => {
    setSearchString(target.value);
  }


  const renderContent = () => {

    return (
      <div>
        <Navbar style={{background: "#73a1cc"}}>
            <Navbar.Group align="left">
                <InputGroup onChange={handleChangeText} style={inputStyle}></InputGroup>
                <Button onClick={handlerAddData} text="" icon="plus" type="button" className="bp3-intent-primary" style={buttonAddStyle}/>
            </Navbar.Group>
        </Navbar>
        <div className="container">
            <HTMLTable striped={true}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Text</th>
                  <th>Text1</th>
                  <th>Text2</th>
                </tr>
              </thead>
              <tbody>
                {data.filter((element) => {
                  const regexp = new RegExp(searchString, 'gi');
                  return element.text.match(regexp);
                }).map(({id, text}) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{text}</td>
                    <td>{text}</td>
                    <td>{text}</td>
                  </tr>
                ))}
              </tbody>
            </HTMLTable>
        </div>
      </div>
    )
      
  };

  if (status === 'idle') {
    return (
      <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
        <h3>Loading</h3>
        <Spinner />
      </div>
    )
  }

  if (status === 'working') {
    return renderContent();
  }
};

export default connect(mapStateToProps, actionCreators)(MyTable);