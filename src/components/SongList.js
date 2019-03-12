import React from 'react'
import SongCard from './SongCard'

const SongList = ({songs}) => {
  return songs.map(song => <SongCard key={song._id["$oid"]} song={song} />)
}

export default SongList
