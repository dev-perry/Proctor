import React, {useEffect, useState} from 'react';
import CalendarDeck from '../blocks/CalendarDeck.jsx';
import '../../styles/pages/Calendar.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Calendar(props) {
  const [aments, setAments] = useState();
  useEffect(()=>{
    axios.get('http://localhost:4000/assignment/calendar/'+ props.userID)
    .then(res => {
      if(res){
        setAments(res.data);
      }else{
        console.log("No data received");
      }
    })
  },[])

//Below code block from: https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
  function groupBy(list, keyGetter){
  const map = new Map();//creating a new map object
  list.forEach((item) => {//setting up a forEach wich uses a callback to accomplish something per each item in an array
    const key = keyGetter(item);//takes in item in the array and returns back property specified in initial call, so if initial argument specified the .type property, it will set the key constant to the value associated with that property for the item within the array
    const collection = map.get(key);//find a key in the map that has this value
    if(!collection){//if the key does not exist, create it along with an array that includes the item
      map.set(key,[item]);
    }else{
      collection.push(item)//if the key does exist add the item to that array in the map
    }
  });
  return map; //return fully grouped map
}

  return (
    <React.Fragment>
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Calendar</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
          <button type="button" className="btn btn-sm btn-outline-secondary">Day</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Week</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Month</button>
        </div>
      </div>
    </div>
    {aments && <CalendarDeck data={groupBy(aments, ament => ament.due)}/>}
  </main>
</React.Fragment>
)}

export default Calendar;
