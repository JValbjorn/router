import { Routes, Route, Navigate} from 'react-router';
import Nav from './components/Nav.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';


function App() {
  return ( 
    <>
      <Nav />
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} /> </Routes>
     
      </main>
    </>
  );
}

export default App;
