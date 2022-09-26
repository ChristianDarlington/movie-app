import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';

function App() {

  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState('')

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=be8a4a3f'

    const response = await fetch(url)
    const responseJson = await response.json()

    console.log(responseJson)

    setMovies(responseJson.Search)

  }

useEffect(() => {
  getMovieRequest()
},[])



  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading='Movies'/>
      <SearchBox search={search} setSearch={setSearch}/>
      </div>
      <div className='row'>
     <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
