import React, { useState } from 'react'
import _ from 'lodash'
import SongCard from './SongCard'
import Reset from '../helpers/Reset'

const SongList = ({songs}) => {
  let [method, setMethod] = useState("")
  let [artist, setArtist] = useState("")
  let [title, setTitle] = useState("")

  const filteredSongs = songs
                      .filter(song => !method || song.murderMethods.includes(method))
                      .filter(song => !artist || song.artist.includes(artist))
                      .filter(song => !title || song.title.includes(title))

  const songElements = filteredSongs.map(song => 
    <SongCard key={song._id["$oid"]} song={song} />
  )

  const murderOptions = _.chain(songs.map((song) => song.murderMethods))
                      .flatten()
                      .uniq()
                      .map(method =>
                        <option key={method} value={method}>{method}</option>
                      )
                      .value()

  const reset = (e) => {
    e.preventDefault()
    Reset(setMethod, setArtist, setTitle)
  }

  return (
    <div id="songList">
      <form>
        <select onChange={(e) => setMethod(e.target.value)} value={method}>
          <option value="" key="select">Select...</option>
          {murderOptions}
        </select>

        <input
          list="titles"
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
        <datalist id="titles">
          {filteredSongs.map(s => s.title).map(t => <option key={t} value={t} />)}
        </datalist>

        <input
          list="artists"
          placeholder="Artist"
          type="text"
          onChange={(e) => setArtist(e.target.value)}
          value={artist} />
        <datalist id="artists">
          {_.uniq(filteredSongs.map(s => s.artist)).map(a => <option key={a} value={a} />)}
        </datalist>

        <button onClick={reset}>Clear</button>
      </form>
      {songElements}
    </div>
  )
}

export default SongList
