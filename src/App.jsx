import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Types from './pages/Types';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path='/types' element={<Types />} />
      </Routes>
    </div>
  );
}

export default App;
