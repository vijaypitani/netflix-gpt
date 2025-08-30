import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';


const useNowPlayingMovies = () => {
 const dispatch =  useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [])
}

export default useNowPlayingMovies