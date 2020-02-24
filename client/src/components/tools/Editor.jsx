import React, { useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor(props){
  const [text, setText] = useState("");

  function handleChange(content, delta, source, editor){
    setText(content);
    props.content(editor.getHTML());
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

  return <ReactQuill modules = {modules} theme = "snow" value={text} onChange={handleChange}/>
}

export default Editor;
