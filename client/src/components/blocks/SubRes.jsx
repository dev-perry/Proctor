import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function SubRes(props) {
const [text, setText] = useState("");

function handleChange(value){
  setText(value);
}

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
    props.sendSub(e);
  }

  //toolbar variables
  const modules = {
    syntax: true,
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike'],
      ['blockquote', 'code-block', 'formula'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }

  return (
<form onSubmit={handleSubmit}>
  <div style={dstyle}>
    <ReactQuill modules = {modules} theme = "snow" value={text} onChange={handleChange}/>
  </div>
  <button style={bstyle} type="submit" className="btn btn-primary">Submit</button>
</form>
)
}

export default SubRes;
