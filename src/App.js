import Home from "./pages/Home/Home";
import AllFilm from "./pages/AllFilm/AllFilm"
import {Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/allfilm" element={<AllFilm />}/>
      </Routes>
    </div>
  );
};

export default App;