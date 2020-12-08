import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Tags from './pages/Tags'
import Categories from './pages/Categories'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import Images from './pages/Images'
import { DisplayModeProvider } from "./context/DisplayMode"

function App() {

  const [dark, setDark] = useState(false)

  const updateMode = () => {
    setDark(!dark)
    localStorage.setItem("dark", !dark)
  }

  useEffect(() => {
    if (localStorage.getItem("dark")) {
      setDark(localStorage.getItem("dark"))
    } else {
      setDark(false)
      localStorage.setItem("dark", false)
    }
  }, [])

  return (
    <>
      <DisplayModeProvider value={{ dark, updateMode }} >
        <Navbar></Navbar>
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/categories">
                <Categories></Categories>
              </Route>
              <Route path="/tags">
                <Tags></Tags>
              </Route>
              <Route path="/post/create">
                <CreatePost></CreatePost>
              </Route>
              <Route path="/post/:id">
                <Post></Post>
              </Route>
              <Route path="/images">
                <Images></Images>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer></Footer>
      </DisplayModeProvider>
    </>
  )
}

export default App
