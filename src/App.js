import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';
import { Home } from './pages/home/Home';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie:id" element={<h1>Movie Detail</h1>} />
          <Route path="/movies/:type" element={<h1>Movies List</h1>} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
