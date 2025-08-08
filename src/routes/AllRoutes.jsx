import {Routes, Route } from 'react-router-dom';
import { MovieDetails, MovieList, Search, PageNotFound } from '../pages';
export  const AllRouters = ()=>{
    return(
        <Routes>
            <Route path="/" element={<MovieList apiPath = "movie/now_playing" type_Movie="Now Playing"  />} />
            <Route path="/movie/:id" element={<MovieDetails   />} />
            <Route path="/series/:sid" element={<MovieDetails />} />
            <Route path="/search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" type_Movie="Popular"  />} />
            <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" type_Movie="Top Rated"  />} />
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" type_Movie="Upcoming"  />} />
            <Route path="/series/topseries" element={<MovieList apiPath="tv/top_rated" type_Movie=" Top Tv series"  />} />
        </Routes>
    )
}