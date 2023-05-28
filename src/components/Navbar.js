// component name shuold always start with capital letter
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {



  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      {/* // <nav class="navbar navbar-expand-lg bg-body-tertiary"> */}
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">
          {props.title}
        </a> */}
        <Link className="navbar-brand" href="/TextForm">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/TextForm">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
               {props.aboutText} 
              </Link>
              {/* <a className="nav-link" href="#">
               {props.aboutText} 
              </a> */}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width: ' 30px', cursor: 'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width: ' 30px', cursor: 'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width: ' 30px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width: ' 30px', cursor: 'pointer'}}></div>
          </div> */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>

          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              // onClick={()=>{props.toggleMode('dark')}}
              onClick={props.toggleMode}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              {props.modeText}
            </label>
          </div>
          {/* <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} " for="flexSwitchCheckDefault`}> */}
          {/* {props.modeText} */}
          {/* </label> */}
        </div>
      </div>
    </nav>
  );
}

// we can set the value of these elements in the project we are using (as per our interest)
// string means that we can set the value of title as string while modifying. Other than string will throw error
Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

//These are default value of the elements if they are not modified
Navbar.defaultProps = { title: "Set title here", aboutText: "About text here" };

// We must need to set the value of all these elements while we are using them in the project
// Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string };
