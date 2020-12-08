/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import PostItem from './PostItem'
import { getPosts } from '../../utils/postsHelper'
import {BottomScrollListener} from "react-bottom-scroll-listener"
import './container.css'

const Container = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [nextPage, setNextPage] = useState(0)
  const [showScroll, setShowScroll] = useState('none')

  useEffect(() => {
    async function getPagePosts() {
      const { success, response, error } = await getPosts(page)
      if (success && response) {
        setPosts([...posts, ...response.response])
        setPage(response.page.current)
        setNextPage(response.page.next)
      }
      if (success && error) {
        console.log(error)
      }
    }
    getPagePosts()
  }, [page])

  useEffect(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowScroll('block')
    } else {
      setShowScroll('none')
    }
    console.log(document.body.scrollTop)
  }, [window.onscroll])

  const backTop = () => {
    const rootElement = document.documentElement
    rootElement.scrollTo({
      top: -100,
      behavior: 'smooth'
    })
  }

  return (
    <div className="container my-5">
      <div className="row my-5">
        {posts.map((post, index) => (
          <div className="col col-sm-12 col-md-6 col-lg-4 my-1" key={index}>
            <PostItem
              title={post.title}
              content={post.text}
              postId={post._id}
            ></PostItem>
          </div>
        ))}
      </div>
      <div className="row">
        <BottomScrollListener
          onBottom={() => {
            nextPage !== null && setPage(nextPage)
          }}
        />
        <button
          className="btn btn-dark btn-circle btn-xl btn-backtop"
          style={{ display: showScroll }}
          onClick={() => backTop()}
        >
          <i className="fa fa-chevron-up"></i>
        </button>
      </div>
    </div>
  )
}

export default Container
