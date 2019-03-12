import React from 'react'
import { Link } from 'react-router-dom'

const SongCard = ({song}) => {
  if(!song) return null

  const link = `/song/${song._id["$oid"]}`

  return (
    <article>
      <h3>{song.title} by {song.artist}</h3>
      <p>Released in {song.year}. From the album {song.album}</p>

      <Link to={link}>Find out more</Link>
    </article>
  )
}

export default SongCard
