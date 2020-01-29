import React, {useState, useEffect} from "react";
import axios from 'axios';
import DClassCard from '../elements/DClassCard.jsx';


function ClassDeck(props){
  const [courses, getCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/catalog/courses/' + props.userID)
        .then(res => {
          if(res){
            getCourses(res.data);
          }else{
            console.log('Get has failed');
          }
        })
  },[])
  return(
    <div className="row">
      <div className="col">
      { courses.map((element, index) =>{
        return(<DClassCard key={element._id} name={element.name} instructor={element.instructor} iD={element.course_id}/>)
      })}
        </div>
      </div>
  )
}

export default ClassDeck;
