import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './Components/MovieList';

function App() {

  const [movies, setMovies] = useState([])

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
      <div className='row'>
     <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
