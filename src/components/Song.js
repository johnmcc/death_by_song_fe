import React from 'react'
import {useState, useEffect} from 'react'
import SongService from '../helpers/SongService'
import Youtube from './Youtube'
import Spotify from './Spotify'
import SongList from './SongList'

const Song = ({match}) => {
  const [song, setSong] = useState(null)
  const [allSongs, setAllSongs] = useState(null)

  let isMounted = false

  useEffect(() => {
    isMounted = true

    Promise.all([
        SongService.fetchOne(match.params.id),
        SongService.fetchAll()
    ]).then(([fetchedSong, fetchedAllSongs]) => {
      if(isMounted){
        setSong(fetchedSong)
        setAllSongs(fetchedAllSongs)
      }
    })

    return () => { isMounted = false }
  }, [match.params.id])

  if (!song || !allSongs) return null

  const related = allSongs.filter(songToCheck => {
    return song.artist === songToCheck.artist && song.title !== songToCheck.title
  })

  return (
    <article>
      <h1>{song.title} - {song.artist}</h1>
      <p>Released in {song.year}</p>

      <Spotify songref={song.spotify} title={song.title} />
      <Youtube videoref={song.youtube} title={song.title} />

      {related.length > 0 &&
        <aside>
          <h4 className="plain">More from {song.artist}</h4>
          <SongList songs={related} />
        </aside>
      }
    </article>
  )
}

export default Song;
