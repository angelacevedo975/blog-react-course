/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { addPost } from '../utils/postsHelper'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

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
      console.log(response)
    }
  }

  return (
    <div className="container my-5 pt-5">
      <div className="row">
        <div className="col col-sm-12 col-1g-8">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-row">
              <div className="col-8 col-md-10">
                <h1>Create Post</h1>
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
              <label>Add Title</label>
              <input
                className="form-control"
                placeholder="Ejemplo: Hello World!"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Add Author</label>
              <input
                className="form-control"
                placeholder="Ejemplo: Me"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Add Content</label>
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
  )
}

export default CreatePost
