import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text area cleared!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Click");
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };
  const capitaliseText = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("First letter has been capitalized!", "success");
  };
  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed successfully!", "success");
  };
  const handleFindChange = (event) => {
    findWord(event.target.value);
  };
  const handleReplaceChange = (event) => {
    console.log(replaceWord(event.target.value));
  };
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
    props.showAlert("Word replaced successfully!", "success");
  };
  //   const  extractEmail = () =>{
  //     let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  //     setText(newText);
  //   };
  const [text, setText] = useState("");
  // text="kdfargj" //wrong way
  // setText("jhdfioweru");  //correct way
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const toggleMode = () => {
    if (myStyle.color == "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };
  function wordCount(text) {
    if(text==""){
      return 0;
    }
    let arr=text.split(/\s+/);
    let len =arr.length;
    let count=0;
    for(let i=0;i<len;i++) {
      if(arr[i]=='' || arr[i]==' '){
        count++;
      }
    }
    return len-count;
  }
  return (
    <>
      <div className="cont" style={props.myStyle}>
        <div className="container" style={props.myStyle}>
          <h1 classNmae="mb-4">{props.heading}</h1>
          <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea
              className="form-control my-3"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="10"
              style={{
                backgroundColor: props.mode == "dark" ? "#212529" : "white",
                color: props.mode == "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleDownClick}>
            Convert to lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClear}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={capitaliseText}>
            Capitalise first letter
          </button>
          <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={removeSpaces}>
            Remove Extra Spaces
          </button>
          {/* <button className="btn btn-dark mx-2" onClick={toggleMode}>
                    Toggle Mode
                </button> */} 

          {/* <button className="btn btn-primary mx-2" onClick={extractEmail}>
          Extract Email
        </button> */}
        </div>
        <div className="container my-3 " style={props.myStyle}>
          <h2>Your text summary</h2>
          <p className="fw-bold">
            {wordCount(text)} words and {text.length} characters
          </p>

          <p className="fw-bold">{0.008 * text.length} minutes</p>
          <h2 className="my-3">Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview"}</p>
          <h2>Find and Replace</h2>
          <textarea
            className="form-control my-3"
            value={fWord}
            onChange={handleFindChange}
            id="myBox"
            rows="2"
            style={{
              backgroundColor: props.mode == "dark" ? "#212529" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}
          ></textarea>
          <textarea
            className="form-control my-3"
            value={rWord}
            onChange={handleReplaceChange}
            id="myBox"
            rows="2"
            style={{
              backgroundColor: props.mode == "dark" ? "#212529" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}
          ></textarea>
          <button className="btn btn-info mx-2" onClick={handleReplaceClick}>
            Replace
          </button>
        </div>
      </div>
    </>
  );
}
TextForm.defaultProps = { heading: "Heading" };
