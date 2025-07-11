import { ReactElement } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'

export default function App(): ReactElement {
  return (
    <Router>
      <div className="app-container">
        {/* Persistent layout elements */}
        
        {/* Dynamic page content */}
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
