import React from 'react'
import CountUp from 'react-countup'
import countBy from 'lodash/countBy'
import flatten from 'lodash/flatten'
import './Stats.css'

const Stats = ({songs}) => {
  if(!songs.length) return null

  const stats = countBy(flatten(songs.map(song => song.murderMethods)))
  const keysSorted = Object.keys(stats).sort(function(a,b){return stats[b]-stats[a]})

  let elements = []

  for(let key of keysSorted){
    if(stats.hasOwnProperty(key)){
      elements.push(
        <span key={key}>
          <CountUp end={stats[key]} duration={2} /> death{stats[key] > 1 && 's'} by {key}
        </span>
      )
    }
  }

  return (
    <article id="stats">
      <h3>Tracking {songs.length} songs and...</h3>
      <p>
        {elements.map((element, i) => [
          i > 0 && ", ",
          element
        ])}
      </p>
    </article>
  )
}

export default Stats
