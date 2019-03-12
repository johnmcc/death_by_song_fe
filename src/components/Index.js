import React from 'react'
import Stats from './Stats'
import RandomSong from './RandomSong'
import sample from 'lodash/sample'

const Index = ({songs}) => {
  const random = sample(songs)

  return (
    <>
      <Stats songs={songs} />
      <RandomSong song={random} />
    </>
  )
}

export default Index
