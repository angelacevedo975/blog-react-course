import React, { useContext } from 'react'
import DisplayMode from "../context/DisplayMode"

const Categories = () => {

  const mode = useContext(DisplayMode)

  return (
    <div className={`container-fluid ${mode.dark && "bg-dark"}`} style={{ "width": "100%" }}>
      <div className="container">
        <h1 className={`my-5 ${mode.dark && "text-light"}`}>Categories Page</h1>
      </div>
    </div>
  )
}

export default Categories
