import { useState } from 'react';
import './SalesReceiptPage.css';

const SalesReceiptPage = () => {
  // Data barang, bisa bertambah/dihapus
  const [items, setItems] = useState([
    { name: '', length: '', color: '', quantity: 1, price: 0, total: 0 },
  ]);

  // Data ringkasan
  const [customer, setCustomer] = useState('');
  const [discount, setDiscount] = useState(0);
  const [ppnRate, setPpnRate] = useState(0.11); // PPN default 11%

  // Fungsi untuk mengubah nilai dalam baris dan hitung total
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    if (['quantity', 'price', 'length'].includes(field)) {
      newItems[index][field] = parseFloat(value) || 0;
    } else {
      newItems[index][field] = value;
    }
    newItems[index].total = newItems[index].quantity * newItems[index].price;
    setItems(newItems);
  };

  // Tambah baris baru
  const addItem = () => {
    setItems([
      ...items,
      { name: '', length: '', color: '', quantity: 1, price: 0, total: 0 },
    ]);
  };

  // Hapus baris tertentu
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Hitung total pembelian, PPN, dan total akhir
  const totalPurchase = items.reduce((sum, item) => sum + item.total, 0);
  const ppnValue = totalPurchase * parseFloat(ppnRate);
  const finalTotal =
    totalPurchase + ppnValue - parseFloat(discount || 0);

  return (
    <div className="sales-receipt-page">
      <h1>Bon Penjualan</h1>

      {/* Ringkasan pembelian */}
      <div className="summary-container">
        <div className="summary-item">
          <label htmlFor="customer">Nama Customer</label>
          <input
            id="customer"
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="summary-item">
          <label>Total Harga Pembelian</label>
          <span>
            Rp {totalPurchase.toLocaleString('id-ID')}
          </span>
        </div>
        <div className="summary-item">
          <label htmlFor="ppn">
            PPN (misal: 0.11 = 11%)
          </label>
          <input
            id="ppn"
            type="number"
            step="0.01"
            value={ppnRate}
            onChange={(e) => setPpnRate(e.target.value)}
          />
        </div>
        <div className="summary-item">
          <label htmlFor="discount">Discount</label>
          <input
            id="discount"
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div className="summary-item">
          <label>Total Harga Akhir</label>
          <span>
            Rp {finalTotal.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

      {/* Tabel input barang dengan pembungkus untuk border radius */}
      <div className="table-wrapper">
        <table className="items-table">
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Panjang</th>
              <th>Warna</th>
              <th>Quantity</th>
              <th>Harga</th>
              <th>Total Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        'name',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.length}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        'length',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.color}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        'color',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        'quantity',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        'price',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  Rp{' '}
                  {item.total.toLocaleString('id-ID')}
                </td>
                <td>
                  <button
                    type="button"
                    className="delete-row"
                    onClick={() => removeItem(index)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        className="add-row"
        onClick={addItem}
      >
        Tambah Barang
      </button>
    </div>
  );
};

export default SalesReceiptPage;
