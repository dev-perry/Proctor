import React from "react";
import {UncontrolledCollapse} from 'reactstrap';
import Editor from './Editor.jsx';

function SubRes() {

  //styling
  const dstyle = {
    position: "relative",
    margin: "auto",
    marginTop: "50px",
    width: "300px",
    height: "100px"
  }
  const bstyle = {
    position: "absolute",
    marginTop: "25px",
    marginLeft: "60px"
  }
  return (
    <>
    <div style={dstyle}>
    <button id="toggler" style = {bstyle} type="button" className="btn btn-primary btn-lg">Create Submission</button>
  </div>
  <div>
    <UncontrolledCollapse toggler="#toggler">
      <Editor/>
    </UncontrolledCollapse>
  </div>
</>)
}

export default SubRes;
