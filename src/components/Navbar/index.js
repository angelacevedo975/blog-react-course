import React, {useContext} from 'react'
import DisplayMode from "../../context/DisplayMode"

const Navbar = () => {

  const mode = useContext( DisplayMode )


  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${mode.dark ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <a className="navbar-brand ml-5" href="/">
        <img
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        ></img>
        Blog App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categories">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tags">
              Tags
            </a>
          </li>
        </ul>
        <a className={`btn mr-3 ${mode.dark ? "btn-secondary " : "btn-primary text-white"}`} href="/post/create">
          Create Post
        </a>
        <a className={mode.dark ? "text-white" : "text-warning"} onClick={ ()=> mode.updateMode() }>
          <i className="fas fa-moon fa-2x"></i>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
