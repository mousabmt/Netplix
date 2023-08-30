import './App.css';
import Home from './components/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from "../src/components/NavBar/navbar";
import { Route, Routes } from 'react-router-dom';
import Favorite from './components/MovieList/movielist';
function App() {
  return (
<div> 
<Routes>
<Route path='/' element={<Home/> }/> 
<Route path='/favorite' element={<Favorite/> }/> 
</Routes>
</div>
);
}

export default App;
