import React from 'react'
import Welcome from './Welcome'
import Stats from './Stats'
import RandomSong from './RandomSong'
import sample from 'lodash/sample'
import './Index.css'

const Index = ({songs}) => {
  const random = sample(songs)

  return (
    <div id="index">
      <Welcome />
      <div id="indexWrapper">
        <Stats songs={songs} />
        <RandomSong song={random} />
      </div>
    </div>
  )
}

export default Index
