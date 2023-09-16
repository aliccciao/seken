import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Testimoni from './pages/Testimoni';
import Fitur from './pages/Fitur';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='about/' element={< About />}></Route>
          <Route exact path='features/' element={< Fitur />}></Route>
          <Route exact path='testimony/' element={< Testimoni />}></Route>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;