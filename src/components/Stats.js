import React from 'react'
import CountUp from 'react-countup'
import countBy from 'lodash/countBy'
import flatten from 'lodash/flatten'
import './Stats.css'

const Stats = ({songs}) => {
  if(!songs.length) return null

  let stats = countBy(flatten(songs.map(song => song.murderMethods)))

  let elements = []

  for(let stat in stats){
    if(stats.hasOwnProperty(stat)){
      elements.push(
        <span key={stat}>
          <CountUp end={stats[stat]} duration={2} /> death{stats[stat] > 1 && 's'} by {stat}
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
