import React, { useState } from 'react'
import SongCard from './SongCard'
import _ from 'lodash'

const SongList = ({songs}) => {
  let [chosenMethod, setChosenMethod] = useState("")
  let [artist, setArtist] = useState("")

  const songElements = songs
                      .filter(song => !chosenMethod || song.murderMethods.includes(chosenMethod))
                      .filter(song => !artist || song.artist.includes(artist))
                      .map(song => <SongCard key={song._id["$oid"]} song={song} />)

  const murderOptionMethods = _.chain(songs.map((song) => song.murderMethods))
                              .flatten()
                              .uniq()
                              .map(method =>
                                <option key={method} value={method}>{method}</option>
                              )
                              .value()

  return (
    <div id="songList">
      <form>
        <select onChange={(e) => setChosenMethod(e.target.value)}>
          <option value="" key="select">Select...</option>
          {murderOptionMethods}
        </select>

        <input type="text" onChange={(e) => setArtist(e.target.value) } />
      </form>
      {songElements}
    </div>
  )
}

export default SongList
