import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import AllFilm from "./pages/AllFilm/AllFilm"
import Filmselected from './pages/FilmSelected/FilmSelected';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/allfilm" element={<AllFilm />}/>
        <Route path="/allfilm/:id" element={<Filmselected/>}/>
      </Routes>
    </div>
  );
};

export default App;