import React from 'react'
import Youtube from './Youtube'
import { Link } from 'react-router-dom'

const RandomSong = ({song}) => {
  if(!song) return null

  const href = `/song/${song._id["$oid"]}`

  return (
    <article>
      <h3 className="plain">Featured Song</h3>
      <h2>{song.title} by {song.artist}</h2>

      <Youtube videoref={song.youtube} title={song.title} />

      <Link to={href}>Find Out More</Link>
    </article>
  )
}

export default RandomSong
