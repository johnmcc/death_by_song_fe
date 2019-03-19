import React, { useContext } from 'react'
import DeathBySongContext from '../store/context'
import Youtube from './Youtube'
import { Link } from 'react-router-dom'
import sample from 'lodash/sample'

import './RandomSong.css'

const RandomSong = () => {
  const {state} = useContext(DeathBySongContext)

  if(!state.songs.length) return null

  const song = sample(state.songs)

  const href = `/song/${song._id["$oid"]}`

  return (
    <article id="randomSong">
      <h3>Featured Song</h3>
      <h4 className="plain">{song.title} by {song.artist}</h4>

      <Youtube videoref={song.youtube} title={song.title} />

      <Link to={href} className="btn">Find Out More</Link>
    </article>
  )
}

export default RandomSong
