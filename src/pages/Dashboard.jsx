import { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onNavigate }) => {
  const [transactions] = useState([
    { id: 1, name: 'Bapak Sutejo', date: '10 Okt 2025, 09:36', amount: 'Rp 1.998.483,96', status: 'completed' },
    { id: 2, name: 'Bapak Sutejo', date: '10 Okt 2025, 09:36', amount: 'Rp 1.998.483,96', status: 'completed' },
    { id: 3, name: 'Bapak Sutejo', date: '10 Okt 2025, 09:36', amount: 'Rp 1.998.483,96', status: 'completed' },
    { id: 4, name: 'Bapak Sutejo', date: '10 Okt 2025, 09:36', amount: 'Rp 1.998.483,96', status: 'completed' },
    { id: 5, name: 'Bapak Sutejo', date: '10 Okt 2025, 09:35', amount: 'Rp 1.998.483,96', status: 'completed' },
  ]);

  const stats = [
    { label: 'Total Produk', value: '3', sub: '', icon: '📦', iconClass: 'blue' },
    { label: 'Penjualan Hari Ini', value: 'Rp 0', sub: '5 transaksi total', icon: '💰', iconClass: 'green' },
    { label: 'Pembelian Hari Ini', value: 'Rp 0', sub: '0 transaksi total', icon: '📥', iconClass: 'purple' },
    { label: 'Stok Menipis', value: '2', sub: '', icon: '⚠️', iconClass: 'red' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard ERP</h1>
        <p className="dashboard-subtitle">Selamat datang, Jonathan saputra lukito</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-content">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              {stat.sub && <div className="stat-sub">{stat.sub}</div>}
            </div>
            <div className={`stat-icon ${stat.iconClass}`}>{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="transactions-section">
        <div className="transactions-card">
          <div className="card-header">
            <h2 className="card-title">
              <span>📝</span>
              Transaksi Terbaru
            </h2>
          </div>
          <div className="card-content">
            <div className="transaction-list">
              {transactions.map((trans) => (
                <div key={trans.id} className="transaction-item">
                  <div className="transaction-icon">🛒</div>
                  <div className="transaction-details">
                    <div className="transaction-name">{trans.name}</div>
                    <div className="transaction-time">{trans.date}</div>
                  </div>
                  <div className="transaction-amount">
                    <div className="amount">{trans.amount}</div>
                    <div className="status-badge">{trans.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="alerts-card">
          <div className="card-header">
            <h2 className="card-title">
              <span>⏰</span>
              Menunggu Approval
            </h2>
          </div>
          <div className="card-content">
            <div className="empty-state">
              <p className="empty-state-text">Tidak ada yang perlu di-approve</p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)' }}></div>

          <div className="card-header">
            <h2 className="card-title">
              <span>⚠️</span>
              Stok Menipis
            </h2>
          </div>
          <div className="card-content">
            <div className="alert-items">
              <div className="alert-item-badge">
                <span>📦</span>
                Open Back - 16 unit
              </div>
              <div className="alert-item-badge">
                <span>📦</span>
                Open Back - 1 unit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
