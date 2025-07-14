import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VideoDetailPage from './pages/VideoDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(window.innerWidth < 992);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <CustomNavbar onToggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<HomePage sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />} />
            <Route path="/video/:id" element={<VideoDetailPage />} />
            <Route path="/search/:query" element={<SearchResultsPage sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;