import './Sidebar.css';

const Sidebar = ({ currentPage, onNavigate, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'produk', label: 'Produk', icon: '🏷️' },
    { id: 'penjualan', label: 'Penjualan', icon: '🛒' },
    { id: 'pembelian', label: 'Pembelian', icon: '📦' },
    { id: 'coating', label: 'Coating', icon: '🎨' },
    { id: 'customer', label: 'Customer', icon: '👥' },
    { id: 'supplier', label: 'Supplier', icon: '🏢' },
    { id: 'hutang', label: 'Hutang', icon: '💳' },
    { id: 'piutang', label: 'Piutang', icon: '📋' },
    { id: 'stok', label: 'Stok', icon: '📈' },
    { id: 'approval', label: 'Approval', icon: '✓' },
    { id: 'faktur', label: 'Faktur Pajak', icon: '📄' },
    { id: 'laporan', label: 'Laporan', icon: '📊' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-box">
          <div className="logo-icon">📦</div>
        </div>
        <div className="logo-text">
          <h3>ProAct ERP</h3>
          <p>Anti-Corruption System</p>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-label">MENU UTAMA</div>
        <nav className="menu-list">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="logout-button" onClick={onLogout}>
          🚪 Keluar
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
