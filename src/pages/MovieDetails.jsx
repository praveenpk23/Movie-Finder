import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";

const MovieDetail = () => {
  const { id ,sid } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const isMovie = Boolean(id);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`, 
    },
  };

   console.log(import.meta.env.TMDB_TOKEN);
  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     setLoading(true);
  //     try {
  //      if(id){
  //        const res = await fetch(
  //         `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
  //         options
  //       );
  //       const data = await res.json();
  //       setMovie(data);
  //       console.log(data);
  //      }else if(sid){
  //        const res = await fetch(
  //         `https://api.themoviedb.org/3/tv/${sid}?language=en-US`,
  //         options
  //       );
  //       const data = await res.json();
  //       setMovie(data);
  //       console.log(data);
  //      }
     
  //     } catch (err) {
  //       console.error("Error fetching movie details:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMovie();
  // }, [id]);


   useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const url = isMovie ? `https://api.themoviedb.org/3/movie/${id}?language=en-US` : `https://api.themoviedb.org/3/tv/${sid}?language=en-US`;
        const res = await fetch(url, options);
        const data = await res.json();
        setMovie(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);


  console.log(movie);
  // console.log(id);



 return (
    // <div className="max-w-6xl mx-auto p-5 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-10">
    //   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    //     {/* Left: Poster */}
    //     <div className="lg:col-span-4">
    //       <img
    //         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //         alt={movie.title}
    //         className="rounded-lg shadow-lg w-full object-cover"
    //       />
    //     </div>

    //     {/* Right: Details */}
    //     <div className="lg:col-span-8 text-gray-900 dark:text-gray-100 flex flex-col justify-between">
    //       {/* Title and Tagline */}
    //       <div>
    //         <h1 className="text-4xl font-extrabold mb-2">{movie.title}</h1>
    //         {movie.tagline && (
    //           <p className="italic text-lg text-gray-600 dark:text-gray-400 mb-6">
    //             "{movie.tagline}"
    //           </p>
    //         )}
    //       </div>

    //       {/* Overview */}
    //       <p className="mb-6 leading-relaxed text-lg">{movie.overview}</p>

    //       {/* Stats Grid */}
    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
    //         <div>
    //           <p>
    //             <span className="font-semibold">Release Date:</span>{" "}
    //             {movie.release_date}
    //           </p>
    //           <p>
    //             <span className="font-semibold">Runtime:</span> {movie.runtime}{" "}
    //             minutes
    //           </p>
    //           <p>
    //             <span className="font-semibold">Language:</span>{" "}
    //             {movie.original_language.toUpperCase()}
    //           </p>
    //           <p>
    //             <span className="font-semibold">Adult Content:</span>{" "}
    //             {movie.adult ? "Yes" : "No"}
    //           </p>
    //         </div>

    //         {/* <div>
    //           <p>
    //             <span className="font-semibold">Genres:</span>{" "}
    //             {movie.genres.map((g) => g.name).join(", ")}
    //           </p>
              
    //            {movie.budget ? (
    //             <p>
    //               <span className="font-semibold">Budget:</span>{" "}
    //              {movie.budget.toLocaleString("en-US", {
    //               style: "currency",
    //               currency: "USD",
    //             })}
    //             </p>
    //            ):("")}
    //           <p>
    //             <span className="font-semibold">Revenue:</span>{" "}
    //             {movie.revenue.toLocaleString("en-US", {
    //               style: "currency",
    //               currency: "USD",
    //             })}
    //           </p>
    //           <p>
    //             <span className="font-semibold">Popularity:</span>{" "}
    //             {movie.popularity.toFixed(1)}
    //           </p>
    //         </div> */}
    //       </div>

    //       {/* Ratings */}
    //       <div className="flex items-center space-x-3">
    //         <span className="text-yellow-400 text-xl font-bold">⭐</span>
    //         <span className="text-xl font-semibold">{movie.vote_average}</span>
    //         <span className="text-gray-600 dark:text-gray-400">
    //           ({movie.vote_count.toLocaleString()} votes)
    //         </span>
    //       </div>

    //       {/* Homepage Link */}
    //       {movie.homepage && (
    //         <a
    //           href={movie.homepage}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="mt-6 inline-block text-blue-600 hover:underline font-semibold"
    //         >
    //           Official Website
    //         </a>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <>
     {loading ? (

      <div class="flex items-center justify-center min-h-screen">
  <div role="status">
    <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
</div>
     ):(
       <Details media={movie} loading={loading} type={isMovie ? 'movie' : 'tv'} />
     )}
    </>
  );

};

export default MovieDetail;
