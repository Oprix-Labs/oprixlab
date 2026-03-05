import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
// import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Process from './pages/Process'
// import Blog from './pages/Blog'
import Team from './pages/Team'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/process" element={<Process />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  )
}

export default App
