import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// let name = "Ritu";
function App() {
  const [modeBody, setModeBody] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [modeAbout, setModeAbout] = useState({
    color: "black",
    backgroundColor: "white"
  });
  const [mode1, setMode1] = useState("dark");
  const [mode, setMode] = useState("light"); //  Whether dark mode is enabled or not
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  // const [alert, setAlert] = useState({
  //   color: 'black',
  //   backgroundColor: 'red'
  // })

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Enable Light Mode");
      setMode1("light");
      setModeBody({
        color: "white",
        backgroundColor: "black",
      });
      setModeAbout({
        color: "white",
        backgroundColor: "#212529"
      });
      document.body.style.backgroundColor= "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "TextUtils is the best app";
      // }, 3000);
    } else {
      setMode("light");
      setModeText("Enable Dark Mode");
      setMode1("dark");
      setModeBody({
        color: "black",
        backgroundColor: "white",
      });
      setModeAbout({
        color: "black",
        backgroundColor: "white"
      });
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-dark');
  // } 
  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+ cls);
  //   if (mode === "light") {
  //     // setMode("dark");
  //     document.body.style.backgroundColor= "black";
      
  //   } else {
  //     // setMode("light"); 
  //     document.body.style.backgroundColor= "white";
  //   }
  // };

  return (
    <>
      <div className="cont" style={modeBody}>
        <BrowserRouter>
          <div className="cont" >
            <Navbar
              title="TextUtils"
              aboutText="About TextUtils"
              mode={mode}
              mode1={mode1}
              toggleMode={toggleMode}
              modeText={modeText}
            />
            <Alert alert={alert} />
          </div>
          <Routes>
            <Route
              exact
              path="/TextForm"
              element={
                <div className="container" >
                  <TextForm
                    showAlert={showAlert}
                    heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces "
                    myStyle={modeBody}
                    mode={mode}
                  />
                </div>
              }
            />
            <Route
              exact
              path="/About"
              element={
                <div className="container" >
                  <About myStyle={modeBody} myStyle1={modeAbout}/>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <div className="cont" style={modeBody}>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          mode1={mode1}
          toggleMode={toggleMode}
          modeText={modeText}
        /> */}
      {/* <Navbar/> */}
      {/* <Alert alert={alert} />
        <div className="container">
          <TextForm
            showAlert={showAlert}
            heading="Enter the text below to analyse "
            myStyle={modeBody}
            mode={mode}
          />
        </div>
        <About myStyle={modeBody} />
      </div> */}
    </>
  );
}

export default App;
