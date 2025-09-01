import { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onNavigate }) => {
  const [totalSales, setTotalSales] = useState(0);

  // Contoh perhitungan total penjualan bulan ini.
  // Ganti logika di dalam useEffect dengan panggilan API backend Anda sendiri.
  useEffect(() => {
    // Misal: fetch data penjualan dari backend
    // fetch('/api/sales/this-month')
    //   .then((res) => res.json())
    //   .then((data) => setTotalSales(data.total));

    // Placeholder data: ganti dengan data aktual Anda
    const dummyTotal = 12500000;
    setTotalSales(dummyTotal);
  }, []);

  // Format angka dengan pemisah ribuan (Rp)
  const formatRupiah = (value) => {
    return value.toLocaleString('id-ID');
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* Kartu total penjualan */}
      <div className="sales-card">
        <h2>Total Penjualan Bulan Ini</h2>
        <p className="sales-value">Rp {formatRupiah(totalSales)}</p>
      </div>

      {/* Tombol navigasi ke halaman lain */}
      <div className="menu-buttons">
        {/* Button Penjualan memanggil onNavigate('sales') */}
        <button onClick={() => onNavigate('sales')}>Penjualan</button>
        {/* Tombol lain tetap atau disesuaikan */}
        <button onClick={() => onNavigate('pembelian')}>Pembelian</button>
        <button onClick={() => onNavigate('customer')}>Customer</button>
        <button onClick={() => onNavigate('stocks')}>Stocks</button>
        <button onClick={() => onNavigate('settings')}>Settings</button>
      </div>
    </div>
  );
};

export default Dashboard;
