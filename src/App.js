import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActivitiesPage from './pages/ActivitiesPage.js';
import PreferencesPage from './pages/PreferencesPage.js';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<PreferencesPage />} />
          <Route path='/activities' element={<ActivitiesPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
