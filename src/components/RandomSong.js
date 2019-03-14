import React from 'react'
import Youtube from './Youtube'
import { Link } from 'react-router-dom'
import './RandomSong.css'

const RandomSong = ({song}) => {
  if(!song) return null

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
