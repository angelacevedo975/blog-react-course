import React from 'react'

const PostItem = () => {
  const { title, content, postId } = this.props
  return (
    <div className="card" style={{ width: '20rem' }}>
      <img className="card-img-top" src="/logo192.png" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href={`/post/${postId}`} className="btn btn-primary">
          See the complete post
        </a>
      </div>
    </div>
  )
}

export default PostItem
