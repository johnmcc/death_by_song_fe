import React, { useState } from 'react'
import SongCard from './SongCard'
import './SongList.css'
import _ from 'lodash'
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

  const murderOptions = _.chain(filteredSongs.map((song) => song.murderMethods))
                      .flatten()
                      .uniq()
                      .map(method =>
                        <option key={method} value={method} />
                      )
                      .value()

  const reset = (e) => {
    e.preventDefault()
    Reset(setMethod, setArtist, setTitle)
  }

  return (
    <div id="songList">
      <form>
        <input
          list="titles"
          placeholder="Title"
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
        <datalist id="titles">
          {filteredSongs.map(song => <option key={song._id["$oid"]} value={song.title} />)}
        </datalist>

        <input
          list="artists"
          placeholder="Artist"
          id="artist"
          type="text"
          onChange={(e) => setArtist(e.target.value)}
          value={artist} />
        <datalist id="artists">
          {_.uniq(filteredSongs.map(s => s.artist)).map(a => <option key={a} value={a} />)}
        </datalist>

        <input
          list="murderMethodsList"
          placeholder="Murder Method"
          id="murderMethods"
          type="text"
          onChange={(e) => setMethod(e.target.value)}
          value={method} />
        <datalist id="murderMethodsList">
          {murderOptions}
        </datalist>

        <button onClick={reset}>Clear</button>
      </form>
      {songElements}
    </div>
  )
}

export default SongList
