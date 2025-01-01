import './App.scss';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='skills' element={<Skills />} />
            <Route path='contact' element={<Contact />} />
            <Route path='portfolio' element={<Portfolio />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;