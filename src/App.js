import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import AllFilm from "./pages/AllFilm/AllFilm"
import Filmselected from './pages/FilmSelected/FilmSelected';
import Favoris from './pages/Favoris/Favoris';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/allfilm" element={<AllFilm />}/>
        <Route path="/allfilm/:id" element={<Filmselected/>}/>
        <Route path="/allfilm/favoris" element={<Favoris/>}/>
      </Routes>
    </div>
  );
};

export default App;