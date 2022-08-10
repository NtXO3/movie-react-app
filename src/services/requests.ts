const key = 'c8c98566ad1356b425fb4fc2834daa8e'

const requests = {
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=2`,
    requestDiscoverMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&`,
    requestDiscoverSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&`,
    requestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRatedSeries: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopularSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
}

export default requests