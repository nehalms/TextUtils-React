//shortcut rfc n enter
import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>

          <div className="d-flex mx-5">
            <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height:'20px', width:'20px', cursor:'pointer'}} ></div>
            <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height:'20px', width:'20px', cursor:'pointer'}} ></div>
            <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style={{height:'20px', width:'20px', cursor:'pointer'}} ></div>
            <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height:'20px', width:'20px', cursor:'pointer'}} ></div>
          </div>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-warning" type="submit">Search</button>
          </form>
          <div class={`form-check form-switch mx-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={() => {props.toggleMode(null)}} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    aboutText: propTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Default title",
    aboutText: "Default about"
};