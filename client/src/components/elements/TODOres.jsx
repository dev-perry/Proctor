import React from 'react';

function TODOres(){
  const dstyle = {
    position: "relative",
    margin: "auto",
    marginTop:"50px",
    width: "300px",
    height: "100px"
  }
  const bstyle = {
    position: "absolute",
    marginTop: "25px",
    marginLeft: "60px"
  }
  return(
    <div style={dstyle}>
      <button style = {bstyle} type="button" className="btn btn-primary btn-lg">Mark Completed</button>
    </div>

  )
}

export default TODOres;
