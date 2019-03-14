import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Index from './components/Index'
import About from './components/About'
import Song from './components/Song'
import SongList from './components/SongList'

import SongService from './helpers/SongService'

import './App.css'

const App = () => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    SongService.fetchAll().then(songs => setSongs(songs))
  }, [])

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Death By Song</h1>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/songs">Explore</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </header>

        <main>
          <Route path="/" exact component={() => <Index songs={songs} /> } />
          <Route path="/songs" component={() => <SongList songs={songs} /> } />
          <Route path="/about/" component={About} />
          <Route path="/song/:id" component={Song} />
        </main>
      </div>
    </Router>
  );
}

export default App
