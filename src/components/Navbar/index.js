import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
        <a className="btn btn-primary text-white mr-3" href="/post/create">
          Create Post
        </a>
        <form className="form-inline my-2 my-lg-0 mr-5">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Looking post?"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
