import React, { useState } from 'react'
import SongCard from './SongCard'
import _ from 'lodash'

const SongList = ({songs}) => {
  let [method, setMethod] = useState("")
  let [artist, setArtist] = useState("")
  let [title, setTitle] = useState("")

  const songElements = songs
                      .filter(song => !method || song.murderMethods.includes(method))
                      .filter(song => !artist || song.artist.includes(artist))
                      .filter(song => !title || song.title.includes(title))
                      .map(song => <SongCard key={song._id["$oid"]} song={song} />)

  const murderOptions = _.chain(songs.map((song) => song.murderMethods))
                      .flatten()
                      .uniq()
                      .map(method =>
                        <option key={method} value={method}>{method}</option>
                      )
                      .value()

  return (
    <div id="songList">
      <form>
        <select onChange={(e) => setMethod(e.target.value)}>
          <option value="" key="select">Select...</option>
          {murderOptions}
        </select>
        <input placeholder="Title" type="text" onChange={(e) => setTitle(e.target.value) } />
        <input placeholder="Artist" type="text" onChange={(e) => setArtist(e.target.value) } />
      </form>
      {songElements}
    </div>
  )
}

export default SongList
