/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPost, getPosts } from '../utils/postsHelper'

const Post = () => {
  const postId = useParams().id
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    async function getThePost() {
      const { success, response, error } = await getPost(postId)
      if (success && response) {
        setTitle(response.response.title)
        setContent(response.response.text)
        setAuthor(response.response.author)
        setDate(response.response.date)
      }
      if (success && error) {
        console.log(error)
      }
    }
    getThePost()
  }, [])

  return (
    <div className="container" style={{ marginTop: '90px' }}>
      <div className="row justify-content-between">
        <div className="col-12 col-md-4">
          <img
            className="card-img-top"
            src="/logo192.png"
            alt="Card image cap"
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>{title}</h1>
          <p>By {author}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
