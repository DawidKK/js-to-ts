import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Posts from './screens/Posts';
import Home from './screens/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="list" element={<Posts />} />
    </Routes>
  );
}

export default App;
