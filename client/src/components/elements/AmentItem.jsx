import React from 'react';
import {Link} from 'react-router-dom';

function AmentItem(props) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  }
  const [date, aData] = props.data;

  const aDate = new Date(date).toLocaleDateString("en-US-u-ca-gregory", options);

  return (
    <div>
    <h6>{aDate}</h6>
    {aData.map((element, index) => {
      return(
    <Link to={element.course.id+"/assignment/" + element._id}><p key={index} className="justify-content-between">
      {element.name}
    </p></Link>
  )
})
}
</div>
)
}

export default AmentItem;
