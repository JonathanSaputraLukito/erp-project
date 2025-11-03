import './Header.css';

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="header-title">Dashboard ERP</h2>
      </div>
      <div className="header-right">
        <div className="header-notification">
          🔔
        </div>
        <div className="user-status">
          <span className="status-dot"></span>
          <span>Login sebagai: <strong>{user?.name || 'User'}</strong></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
