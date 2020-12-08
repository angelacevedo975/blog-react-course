import React, {useContext} from 'react'
import DisplayMode from "../context/DisplayMode"

const Tags = () => {
  const mode = useContext(DisplayMode)

  return (
    <div className={`container-fluid ${mode.dark && "bg-dark"}`} style={{ "width": "100%" }}>
      <div className="container mt-5 pt-5">
        <h1 className={`my-5 ${mode.dark && "text-light"}`}>Tags Page</h1>
      </div>
    </div>
  )
}

export default Tags
