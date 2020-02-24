import React, {useState} from "react";
import axios from "axios";
import Editor from '../tools/Editor.jsx';

function SubRes(props) {
const [content, setContent] = useState(null);
  //styling
  const dstyle = {
    marginLeft:"24px",
    marginRight: "60px",
    marginTop: "30px"
  }

  const bstyle = {
    marginTop: "15px",
    marginLeft: "85%",
    width: "100px"
  }

  function handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:4000/assignment/submission/'+ props.uid +'/'+ props.aid, {date:Date(), data: content})
    .then(
      res => {
        if(res){
          console.log(res.data);
        }else{
          console.log('Get has failed');
        }
      }
    )
  }

  return (
<form onSubmit={handleSubmit}>
  <div style={dstyle}>
    <Editor content={setContent}/>
  </div>
  <button style={bstyle} type="submit" className="btn btn-primary">Submit</button>
</form>
)
}

export default SubRes;
