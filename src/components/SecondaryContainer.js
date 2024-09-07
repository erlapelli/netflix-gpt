import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies);


  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
    <div className=' mt-0 md:-mt-40 pl-4 md:pl-10 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>
      <MovieList title={"Upcomimg Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
);

};

export default SecondaryContainer
