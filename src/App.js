import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Tags from './pages/Tags'
import Categories from './pages/Categories'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import Images from './pages/Images'

function App() {

  return (
    <>
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
        </>
  )
}

export default App
