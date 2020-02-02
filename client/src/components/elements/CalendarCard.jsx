import React from "react";
import {Card, ListGroup, CardHeader, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../styles/elements/CalendarCard.css';

function CalendarCard(props) {
const options = {weekday:"long", month: "long", day: "numeric"}
const [date, aData] = props.data;

const aDate = new Date(date).toLocaleDateString("en-US-u-ca-gregory", options);


  return (<Card className="calendar-card">
    <CardHeader>
      <h5>{aDate}</h5>
    </CardHeader>
    <ListGroup>
      {aData.map((element, index) => {
        return(
          <ListGroupItem key={index} className="calendar-list-group-item">
            <h6>
              <span className="badge badge-secondary">{element.course.name}
              </span>
              <Link className="assignment-name" to={"class/"+element.course.id+"/assignment/" + element._id}>{element.name}</Link>
            </h6>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  </Card>)
}

export default CalendarCard;
