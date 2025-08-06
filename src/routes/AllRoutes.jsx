import {Routes, Route } from 'react-router-dom';
import { MovieDetails, MovieList, Search, PageNotFound } from '../pages';
export  const AllRouters = ()=>{
    return(
        <Routes>
            <Route path="/" element={<MovieList apiPath = "now_playing" type="movie" />} />
            <Route path="/movie/:id" element={<MovieDetails type="movie"  />} />
            <Route path="/series/:sid" element={<MovieDetails type="tv" />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/movies/popular" element={<MovieList apiPath="popular" type="movie" />} />
            <Route path="/movies/top" element={<MovieList apiPath="top_rated" type="movie" />} />
            <Route path="/movies/upcoming" element={<MovieList apiPath="upcoming" type="movie" />} />
            <Route path="/movies/topseries" element={<MovieList apiPath="top_rated" type="tv" />} />
        </Routes>
    )
}