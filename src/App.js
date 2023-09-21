import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home';
import Schedule from './components/pages/Schedules';
import Layout from './components/pages/Layout';
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="contact" element = {<Contact/>} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
