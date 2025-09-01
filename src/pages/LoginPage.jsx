import { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Definisikan ikon mata (lihat & sembunyi) dengan inline SVG
  const EyeIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
  const EyeOffIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18m-2-10.935a9.753 9.753 0 00-7.543-7.543M8.537 8.537A4.5 4.5 0 0115.464 15.464M21.542 12.458a9.753 9.753 0 01-7.542 7.542M5.75 18.75A9.753 9.753 0 012.458 12.458" />
    </svg>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-illustration">
        <h2>Selamat Datang Kembali!</h2>
        <p>Akses dashboard ERP Anda dengan masuk ke akun Anda.</p>
      </div>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Masuk</h1>

          {/* Email: label pakai placeholder ikon kosong agar lebarnya sama dengan label password */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
              {/* Placeholder agar lebar label sama dengan password (ukuran sama dengan ikon mata) */}
              <span className="label-icon-placeholder"></span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password: label berisi teks dan ikon mata yang dapat diklik */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Kata Sandi
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? EyeOffIcon : EyeIcon}
              </button>
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Opsi dan tombol sama seperti sebelumnya */}
          <div className="options">
            <label className="remember-me">
              <input type="checkbox" name="remember" />
              Ingat saya
            </label>
            <a href="#" className="forgot-password">Lupa kata sandi?</a>
          </div>

          <button type="submit" className="submit-button">Masuk</button>

          <p className="signup-text">
            Belum punya akun? <a href="#">Daftar</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
