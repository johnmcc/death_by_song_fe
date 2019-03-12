import React from 'react'

const Spotify = ({title, songref}) => {
  const src = `https://open.spotify.com/embed/track/${songref}`

  return <iframe
          src={src}
          title={title}
          width="300"
          height="90"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"></iframe>
}

export default Spotify
