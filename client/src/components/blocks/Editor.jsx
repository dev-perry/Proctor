import React, {useState} from 'react';
import ReactQuill from 'react-quill';

function Editor(){
  const [text, setText] = useState("");

  function handleChange(value){
    setText(value);
  }

  return(
    <ReactQuill value={text} onChange={handleChange}/>
  )
}

export default Editor;
