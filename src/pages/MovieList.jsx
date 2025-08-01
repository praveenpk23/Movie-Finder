import { useState,useEffect } from "react";
import Card from "../components/Card"
import { useParams,useLocation  } from "react-router-dom";


const MovieList = () => {

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTIwYWIwZDk0MTQ0Mjg5MWNhMGY4Yjk5N2M2OTIyNCIsIm5iZiI6MTc1Mzg3NTMxNS4xOTYsInN1YiI6IjY4OGEwMzczNTMyOGM1MGUwMjg0YmVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m2UpAysToXMBCnnbRroijRdP8U-Helou3esT86AF1Tw'
  }
};


  const [movies, setMovies] = useState([]);
  const [movieType, setMovieType] = useState("now_playing");
  const [loading,setLoading]= useState(false);
  const location = useLocation();
  console.log(location.pathname);
  

  useEffect(()=>{
    function handleMovieTypeChange() {
    
    if(location.pathname === "/movies/popular"){
      setMovieType("popular");
    }else if(location.pathname === "/movies/top"){
      setMovieType("top_rated");
    }else if(location.pathname === "/movies/upcoming"){
      setMovieType("upcoming");
    }else if(location.pathname === "/"){
      setMovieType("now_playing");
    }else{
      return;
    }
  }
    handleMovieTypeChange();
 },[location.pathname]);




  async function fetchMovies() {
    setLoading(true)
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieType}?language=en-US&page=1`,options)
      const data  = await response.json();
      setMovies(data.results);
      console.log(data.results);
    }catch(error){
      console.error("Error fetching movies:", error);
    }finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchMovies();
  },[movieType])
 


  return (
    <main>



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
    <section className="max-w-7xl mx-auto py-7">
    <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2">
      {movieType === "popular" && <h1 className="text-2xl font-bold text-center col-span-3">Popular Movies</h1>}
      {movieType === "top_rated" && <h1 className="text-2xl font-bold text-center col-span-3">Top Rated Movies</h1>}
      {movieType === "upcoming" && <h1 className="text-2xl font-bold text-center col-span-3">Upcoming Movies</h1>}
      {/* {movieType === "popular" && <h1 className="text-2xl font-bold text-center col-span-3">Popular Movies</h1>} */}
          {movies.map((movie , index) => (
                  <Card loading={loading} movieType={movieType} movie={movie} key={index} />
                ))}
       </div>
    </section>

)}

      
       </main>

  )
}

export default MovieList
