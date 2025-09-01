import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-32 m-1'>
        <img alt="Movie_card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard