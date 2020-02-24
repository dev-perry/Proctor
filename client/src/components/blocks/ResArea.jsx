import React from "react";
import TODOres from '../elements/TODOres.jsx';
import SubRes from './SubRes.jsx';
import QuizRes from './QuizRes.jsx';
import axios from 'axios';

function ResArea(props) {
  const uID = props.uID;
  const aID = props.aID;
  const type = props.amentType;
  let res = null;

  function sendSubmission(data){
    axios.post('http://localhost:4000/assignment/submission/'+ uID + '/' + aID, data)
    .then( res => {
      if(res.data){
        console.log("Data caught");
        console.log(res.data);
      }else{
        console.log("No data caught");
      }
    }
    )
  }

  switch (type) {
    case "TODO":
      res = <TODOres sendSub = {sendSubmission}/>
      break;
    case "Submission":
      res = <SubRes sendSub = {sendSubmission} uid={uID} aid={aID}/>
      break;

    case "Form":
      res = <QuizRes sendSub = {sendSubmission}/>
      break;

    default:
      res = null;

  }

  return res

}

export default ResArea;
