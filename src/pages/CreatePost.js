/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { addPost } from '../utils/postsHelper'
import DisplayMode from "../context/DisplayMode"

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [done, setDone] = useState(false)
  const mode = useContext(DisplayMode)

  const handleSubmit = (e) => {
    e.preventDefault()
    addAllPost()
  }

  const addAllPost = async () => {
    const post = {
      title,
      text,
      author
    }
    const { success, response, error } = await addPost(post)
    if (success && response) {
      setDone(true)
      setTimeout(() => {
        setDone(false)
      }, 10000)
    }
  }

  return (
    <div className={mode.dark ? "bg-dark pb-5" : ""}>
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col col-sm-12 col-1g-8">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-row">
                <div className="col-8 col-md-10">
                  {done &&
                    <div className="card" style={{ "width": "100%" }}>
                      <div className="card-body">
                        <p className="card-text">The Post was published successfully</p>
                      </div>
                    </div>
                  }
                  <h1 className={mode.dark ? "text-light" : ""}>Create Post</h1>
                </div>
                <div className="col-4 col-md-2">
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                  >
                    Publish Post
                </button>
                </div>
              </div>
              <div className="form-group">
                <label className={mode.dark ? "text-light" : ""}>Add Title</label>
                <input
                  className="form-control"
                  placeholder="Ejemplo: Hello World!"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label className={mode.dark ? "text-light" : ""}>Add Author</label>
                <input
                  className="form-control"
                  placeholder="Ejemplo: Me"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label className={mode.dark ? "text-light" : ""}>Add Content</label>
                <textarea
                  className="form-control"
                  rows={20}
                  placeholder="Ejemplo: There is the content!"
                  name="content"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
