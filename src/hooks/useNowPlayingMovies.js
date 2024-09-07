import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";


const useNowPlayingMovies = () =>{

 const dispatch = useDispatch();

 const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowplayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    const json = await data.json();

    
    dispatch(addNowPlayingMovies(json.results));
  }

  
  useEffect(()=>{
     !nowPlayingMovies && getNowplayingMovies();

  },[]);
};

export default useNowPlayingMovies;