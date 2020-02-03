import React from 'react';
import AmentItem from '../elements/AmentItem.jsx';

function UpcomingList(props){
  const data = props.data;
  const amentMap = [...data]

  return (
  amentMap.map((element, index) => {
    return <AmentItem key={index} data={element}/>
  })
)
}

export default UpcomingList;
