import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles/pages/Assignment.css';
import ResArea from '../blocks/ResArea.jsx';

function Assignment(props){
  const {aid} = props.match.params;
  const [aData, setData] = useState({});
  const options = {weekday:"long", month: "long", day: "numeric", hour: "numeric", minute: "numeric"};

  const dueDate = new Date(aData.due).toLocaleDateString("en-US-u-ca-gregory", options);

  useEffect(()=>{
    axios.get("http://localhost:4000/assignment/s/" + aid)
    .then( res => {
      if(res.data){
        setData(res.data);
      }else{
        console.log("No data received");      }
    })
  },[])

  return(
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
      <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h4 className="h2">{aData.name}</h4>
        <div className="sinfo">
          <img className="calendar-icon" src="/assets/img/clock.svg" alt="clock-icon"/>
          <p className="due">{dueDate}</p>
      {aData.tags && aData.tags.map((element, index) => <h6 className="tags" key={index}><span className="badge badge-info">{element}</span></h6>)}
        </div>
        </div>
        <div className="a-desc">
        <p>{aData.desc}</p>
        </div>
        <ResArea amentType = {aData.type} uID={props.userID} aID = {aid}/>
      </main>
  )
}

export default Assignment
