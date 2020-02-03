import React, {useEffect, useState} from 'react';
import UpcomingList from './UpcomingList.jsx';
import axios from 'axios';
import '../../styles/blocks/Upcoming.css';

function Upcoming(props){
  const cUID = props.course;
  const [aments, setAments] = useState();

  useEffect(()=>{
    axios.get('http://localhost:4000/assignment/'+ cUID.id)
    .then(res => {
      if(res){
        setAments(res.data);
      }else{
        console.log("No data received");
      }
    })
  },[cUID])

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

  return(
    <React.Fragment>
    <h3 className="upcoming-header">Upcoming</h3>
    <div className="jumbotron jumbotron-fluid bg-light ucontainer">
        {aments && <UpcomingList className="upcoming-list" data={groupBy(aments, ament => ament.due)}/>}
  </div>
</React.Fragment>

  )
}

export default Upcoming;
