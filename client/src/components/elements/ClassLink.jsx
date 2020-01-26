import React from "react";
import {Link} from "react-router-dom";

function ClassLink(props){
  return(
    <li className="nav-item">
      <Link className="nav-link" to={"/class/" + props.course_id}>
        {props.name}
      </Link>
    </li>
  )
}

export default ClassLink;
