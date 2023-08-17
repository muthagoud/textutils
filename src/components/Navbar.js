import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">about</Link>
      </li>
      
      
    </ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit" onClick={hello}>Search</button>
    </form>
  </div>
  <div className={`form-check text-${props.mode==='dark'?"light":"dark"}`}>
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={props.toggle}/>
  <label className="form-check-label dark" htmlFor="flexCheckDefault">
    enable dark
  </label>
</div>
</nav>
   

    </>
  )
}
const hello=()=>
{
    console.table("hello clicked")
}
