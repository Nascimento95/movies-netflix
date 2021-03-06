import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import AllFilm from "./pages/AllFilm/AllFilm"
import Filmselected from './pages/FilmSelected/FilmSelected';
import Favoris from './pages/Favoris/Favoris';
import NotFound from './pages/Notfound/NotFound';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/allfilm" element={<AllFilm />}/>
        <Route path="/allfilm/:id" element={<Filmselected/>}/>
        <Route path="/allfilm/favoris" element={<Favoris/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;