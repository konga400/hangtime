import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Activities from './pages/Activities.js';
import Preferences from './pages/Preferences.js';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Preferences />} />
          <Route path='/activities' element={<Activities />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
