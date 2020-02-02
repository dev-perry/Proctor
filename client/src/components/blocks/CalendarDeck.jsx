import React from 'react';
import CalendarCard from '../elements/CalendarCard.jsx';

function CalendarDeck(props) {
  const data = props.data;
  const calMap = [...data]

  return (
  calMap.map((element, index) => {
    return <CalendarCard key={index} data={element}/>
  })
)
}

export default CalendarDeck;
