import React from 'react'
import Welcome from './Welcome'
import Stats from './Stats'
import RandomSong from './RandomSong'
import './Index.css'

const Index = () => {

  return (
    <div id="index">
      <Welcome />
      <div id="indexWrapper">
        <Stats />
        <RandomSong />
      </div>
    </div>
  )
}

export default Index
