import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Products from './Products';

function App() {

  return (
    <Router>
      <div className="bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;