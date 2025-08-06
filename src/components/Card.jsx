import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
const Card = ({movie,movieType,type}) => {

  const navigate = useNavigate();

  const handleNavigation = () =>{
    navigate(`/movie/${movie.id}`);
  }
  const [readMore, setReadMore] = useState(false);

  console.log(movieType);
 return (

  
  <div className="max-w-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to={type === "tv" ? `/series/${movie.id}` : `/movie/${movie.id}`} className="block">
      <img
        className="rounded-t-lg w-full h-auto object-cover"
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt="img"
        // onClick={()=>{handleNavigation()}}
      />  
    </Link>
    <div className="p-5">
    <Link to={type === "tv" ? `/series/${movie.id}` : `/movie/${movie.id}`} className="block">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.name ? ` ${movie.name}` : `${movie.title}`}
        </h5>
      </Link>

      {/* <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        Original Title: {movie.original_title || movie.original_name}
      </p> */}
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        Language: {movie.original_language.toUpperCase()}
      </p>
      {/* {movie.first_air_date ? (
         <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        First Air Date: {movie.first_air_date}
      </p>
      ):(
         <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        Release Date: {movie.release_date}
      </p>
      )} */}
     
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        Rating: ⭐ {movie.vote_average} ({movie.vote_count} votes)
      </p>
      {/* <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        Popularity: {movie.popularity}
      </p> */}
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
       {movie.overview
    ? (readMore ? movie.overview : `${movie.overview.substring(0, 100)}...`)
    : "No overview available."}
      </p>
       <button
         
          className="text-blue-600 hover:underline text-sm mb-3"
        >
         
        </button>

      <button
        onClick={() => setReadMore(!readMore)}
        className=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {readMore ? "Read Less" : "Read More"}
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  </div>
);

};

export default Card;
