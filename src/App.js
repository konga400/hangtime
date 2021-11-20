import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActivitiesPage from './pages/ActivitiesPage.js';
import LoginPage from './pages/LoginPage.js';
import PreferencesPage from './pages/PreferencesPage.js';
import TestPage from './pages/TestPage.js';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<LoginPage />} />
          <Route path='/preferences' element={<PreferencesPage />} />
          <Route path='/activities' element={<ActivitiesPage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
