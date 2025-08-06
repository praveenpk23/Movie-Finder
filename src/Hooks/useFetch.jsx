import { useState,useEffect } from "react";
const useFetch = (apiPath,type,fetchType,id) => {

    console.log("useFetch called with apiPath:", apiPath, "and type:", type , fetchType, "id:", id);
    // const { id ,sid } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
      const getUrl = (apiPath, type, fetchType) => {
        if (fetchType === "all" && type==="movie") {
            return `https://api.themoviedb.org/3/${type}/${apiPath}?language=en-US&page=1&include_adult=true`;
        } else if (fetchType === "one" && type==="movie") {
            return `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        } else if (fetchType === "all" && type==="tv") {
            return `https://api.themoviedb.org/3/tv/${apiPath}?language=en-US&page=1&include_adult=true`;
        } else if (fetchType === "one" && type==="tv") {
            return `https://api.themoviedb.org/3/tv/${id}?language=en-US&page=1&include_adult=true`;
        }
        return '';
      }
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
        };


    useEffect(()=>{
      fetchMovies();    
    },[apiPath ,fetchType, id , type]);
    
    
      async function fetchMovies() {
        setLoading(true)
        try{
          const url = getUrl(apiPath, type, fetchType,id);
          console.log("Constructed URL:", url);
          const response = await fetch(url,options)
          const data  = await response.json();
          if(fetchType === "all"){
            setData(data.results);
            console.log(data.results);
          }else{
          setData(data);
          console.log(data);
          }
        }catch(error){
          console.error("Error fetching movies:", error);
        }finally{
          setLoading(false);
        }
      }

    
     

  return {data,loading}
}

export default useFetch
