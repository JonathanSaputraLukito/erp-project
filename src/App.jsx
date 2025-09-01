import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SalesReceiptPage from './pages/SalesReceiptPage';

// Data dummy user seperti sebelumnya
const dummyUsers = [
  { email: 'admin@example.com', password: 'admin123', name: 'Admin' },
  { email: 'user@example.com', password: 'user123', name: 'User' },
];

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // Tambahkan currentPage: 'login', 'dashboard', 'sales', dll.
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = (email, password) => {
    const foundUser = dummyUsers.find(
      (user) => user.email === email && user.password === password,
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      setCurrentPage('dashboard'); // Arahkan ke dashboard setelah login
    } else {
      alert('Email atau kata sandi salah!');
    }
  };

  // Fungsi untuk navigasi antar halaman
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // Render berdasarkan halaman saat ini
  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard user={currentUser} onNavigate={handleNavigate} />;
  }

  if (currentPage === 'sales') {
    return <SalesReceiptPage />;
  }

  // fallback
  return null;
}

export default App;
