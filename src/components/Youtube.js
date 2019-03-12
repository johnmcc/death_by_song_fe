import React from 'react'

const Youtube = ({title, videoref}) => {
  if(!videoref) return null

  const src = `https://www.youtube.com/embed/${videoref}`

  return <iframe
            width="560"
            height="315"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
}

export default Youtube
