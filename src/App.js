import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

// let name = "Ritu";
function App() {
  const [modeBody, setModeBody] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [mode1, setMode1] = useState("dark");
  const [mode, setMode] = useState("light"); //  Whether dark mode is enabled or not
  const [modeText, setModeText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setModeText("Enable Light Mode");
      setMode1("light");
      setModeBody({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setMode("light");
      setModeText("Enable Dark Mode");
      setMode1("dark");
      setModeBody({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <>
      <div className="cont" style={modeBody}>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          mode1={mode1}
          toggleMode={toggleMode}
          modeText={modeText}
        />
        {/* <Navbar/> */}

        <div className="container">
          <TextForm
            heading="Enter the text below to analyse "
            myStyle={modeBody}
            mode={mode}
          />
        </div>
        <About myStyle={modeBody} />
      </div>
    </>
  );
}

export default App;
