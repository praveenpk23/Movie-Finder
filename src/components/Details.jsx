import React from "react";

const MediaDetailCard = ({ media, type = "movie", loading }) => {
  if (!media) return null;

  const {
    backdrop_path,
    poster_path,
    title,
    name,
    original_title,
    original_name,
    tagline,
    overview,
    genres,
    release_date,
    first_air_date,
    number_of_seasons,
    number_of_episodes,
    created_by,
    status,
    vote_average,
    homepage,
    spoken_languages,
    

  } = media;

  return (
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
  ): (
      <div
      className="relative bg-cover bg-center py-10 px-4 sm:px-8"
      style={{
        backgroundImage: backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${backdrop_path})`
          : "none",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-autobackdrop-blur-md rounded-2xl p-6 sm:p-10 text-white shadow-xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Poster */}
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt="Poster"
              loading="lazy"
              className="rounded-xl w-full max-w-xs mx-auto md:mx-0"
            />
          )}

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1">
              {title || name || original_name || original_title}
            </h1>

            {tagline && (
              <p className="italic text-gray-300 mb-4">"{tagline}"</p>
            )}

            <p className="mb-4 text-gray-200">{overview}</p>

            {genres?.length > 0 && (
              <p className="mb-2">
                <strong>Genres:</strong>{" "}
                {genres.map((g) => g.name).join(", ")}
              </p>
            )}

            <p className="mb-2">
              <strong>Release:</strong> {first_air_date || release_date || "N/A"}
            </p>

            {type === "tv" && (
              <>
                <p className="mb-2">
                  <strong>Seasons:</strong> {number_of_seasons}
                </p>
                <p className="mb-2">
                  <strong>Episodes:</strong> {number_of_episodes}
                </p>
                {created_by?.length > 0 && (
                  <p className="mb-2">
                    <strong>Created by:</strong>{" "}
                    {created_by.map((c) => c.name).join(", ")}
                  </p>
                )}
              </>
            )}

            <p className="mb-2">
              <strong>Status:</strong> {status}
            </p>

            <p className="mb-2">
              <strong>Rating:</strong>{" "}
              {vote_average ? vote_average.toFixed(1) : "N/A"} / 10
            </p>

               <p className="mb-2">
              <strong>Language:</strong>{" "}
              {spoken_languages?.length > 0 ? (spoken_languages[0].english_name) : "N/A"}
            </p>

            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-blue-300 underline hover:text-white transition"
              >
                Visit Official Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )}
 </>
  );
};

export default MediaDetailCard;
