import React from "react";
import TODOres from '../elements/TODOres.jsx';
import SubRes from './SubRes.jsx';
import QuizRes from './QuizRes.jsx';

function ResArea(props) {
  const type = props.amentType;
  let res = null;

  switch (type) {
    case "TODO":
      res = <TODOres/>
      break;
    case "Submission":
      res = <SubRes/>
      break;

    case "Form":
      res = <QuizRes/>
      break;

    default:
      res = null;

  }

  return res

}

export default ResArea;
