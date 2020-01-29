import React from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../styles/blocks/DClassCard.css';


function DClassCard(props){
  const instructor = props.instructor;
  return(

      <Card className="class-card" body outline color="secondary">
        <CardBody>
        <Link to={"/class/" + props.iD}><CardTitle><h5>{props.name}</h5></CardTitle></Link>
      {instructor.map((element)=>{//map through array of objects passed from ClassDeck prop
          return(<CardText key={element._id}>{element.fname} {element.lname}</CardText>)
        })}
      </CardBody>
      </Card>


  )
}

export default DClassCard;
