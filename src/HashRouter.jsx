import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Artists from './pages/Artists';
import News from './pages/News';
import Publications from './pages/Publications';
import Donations from './pages/Donations';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="artists" element={<Artists />} />
          <Route path="publications" element={<Publications />} />
          <Route path="news" element={<News />} />
          <Route path="donations" element={<Donations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;