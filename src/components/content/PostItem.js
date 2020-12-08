import React, {useContext} from 'react'
import DisplayMode from "../../context/DisplayMode"

const PostItem = ( { title, content, postId } ) => {

  const mode= useContext(DisplayMode)
  
  return (
    <div className={`card ${mode.dark && "bg-secondary"}`} style={{ width: '20rem' }}>
      <img className="card-img-top" src="/logo192.png" alt="Card image cap" />
      <div className="card-body">
        <h5 className={`card-title ${mode.dark && "text-light"}`}>{title}</h5>
        <p className={`card-text ${mode.dark && "text-light"}`}>{content}</p>
        <a href={`/post/${postId}`} className={`btn ${mode.dark ? "btn-dark" : "btn-primary"}`}>
          See the complete post
        </a>
      </div>
    </div>
  )
}

export default PostItem
