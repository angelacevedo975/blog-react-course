/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { uploadImages } from '../utils/postsHelper'


const Images = () => {
  const [file, setFile] = useState({})
  const [ref, setRef] = useState(null);
  
  const handleChange = (e) => {
    e.preventDefault()
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <h1 className="display-4 my-5 text-center">images page</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <input
          className="form-control"
          onChange={(e) => handleChange(e)}
          type="file"
        ></input>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  )
}

export default Images
