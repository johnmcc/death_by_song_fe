import React from 'react'
import CountUp from 'react-countup'
import countBy from 'lodash/countBy'
import flatten from 'lodash/flatten'

const Stats = ({songs}) => {
  if(!songs.length) return null

  let stats = countBy(flatten(songs.map(song => song.murderMethods)))

  let elements = []

  for(let stat in stats){
    if(stats.hasOwnProperty(stat)){
      elements.push(
        <p key={stat}>
          <CountUp end={stats[stat]} duration={2} /> death{stats[stat] > 1 && 's'} by {stat}
        </p>
      )
    }
  }

  return (
    <article>
      <h2>Tracking...</h2>
      {elements}
    </article>
  )
}

export default Stats
