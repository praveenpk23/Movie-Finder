import {Routes, Route } from 'react-router-dom';
import { MovieDetails, MovieList, Search, PageNotFound } from '../pages';
export  const AllRouters = ()=>{
    return(
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/movies/popular" element={<MovieList />} />
            <Route path="/movies/top" element={<MovieList />} />
            <Route path="/movies/upcoming" element={<MovieList />} />
        </Routes>
    )
}