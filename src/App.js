import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { MovieList } from './components/movieList/MovieList';
import { Movie } from './pages/movie/Movie';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Movie/>} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
