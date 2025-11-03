import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SalesReceiptPage from './pages/SalesReceiptPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const dummyUsers = [
  { email: 'admin@example.com', password: 'admin123', name: 'Administrator' },
  { email: 'user@example.com', password: 'user123', name: 'User' },
];

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = (email, password) => {
    const foundUser = dummyUsers.find(
      (user) => user.email === email && user.password === password,
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      setCurrentPage('dashboard');
    } else {
      alert('Email atau kata sandi salah!');
    }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('login');
  };

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} onLogout={handleLogout} />
      <div className="main-content">
        <Header user={currentUser} />
        <div className="page-content">
          {currentPage === 'dashboard' && <Dashboard user={currentUser} onNavigate={handleNavigate} />}
          {currentPage === 'penjualan' && <SalesReceiptPage />}
          {currentPage !== 'dashboard' && currentPage !== 'penjualan' && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <h2>Halaman {currentPage} - Coming Soon</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
