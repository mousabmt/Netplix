import './App.css';
import Home from './components/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from "../src/components/NavBar/navbar";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
<div> 
<ColorSchemesExample/>
<Routes>
<Route path='/' element={<Home/> }/> 
</Routes>
</div>
);
}

export default App;
