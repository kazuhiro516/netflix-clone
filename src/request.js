export const requests = {
  feachTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-us`,
  feachNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  feactTopRated: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&languager=en-us`,
  feactAnimeMovies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
  feactComedyMovies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  feactCrimeMovies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
  feactRomanceMovies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  feactDocumentMovies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
  feactHistoryMovies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=36`,
}
