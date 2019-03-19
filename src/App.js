import React, { useEffect, useContext, useReducer } from 'react'
import DeathBySongContext from './store/context'
import Reducer from './store/reducer'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Index from './components/Index'
import About from './components/About'
import Song from './components/Song'
import SongList from './components/SongList'

import SongService from './helpers/SongService'

import './App.css'

const App = () => {
  const initialState = useContext(DeathBySongContext)
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    SongService.fetchAll().then(songs => dispatch({ type: "SET_SONGS", payload: songs }))
  }, [])

  return (
    <DeathBySongContext.Provider value={{state, dispatch}}>
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
            <Route path="/" exact component={() => <Index /> } />
            <Route path="/songs" component={() => <SongList /> } />
            <Route path="/about/" component={About} />
            <Route path="/song/:id" component={Song} />
          </main>
        </div>
      </Router>
    </DeathBySongContext.Provider>
  );
}

export default App
