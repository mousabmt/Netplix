import './App.css';
import Home from './components/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,Outlet } from 'react-router-dom';
import Favorite from './components/MovieList/movielist';
import Series from './components/Series/series';
import Notfound from './components/handlePages/notFound';
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/series" element={<Series />} />
        <Route path="*" element={<Notfound />} /> {/* Route for 404 errors */}
      </Route>
      </Routes>
    </div>
  );
}

export default App;
