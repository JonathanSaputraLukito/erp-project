import { useState } from 'react';
import './SalesReceiptPage.css';

const SalesReceiptPage = () => {
  const [items, setItems] = useState([
    { name: '', length: '', color: '', quantity: 1, price: 0, total: 0 },
  ]);

  const [customer, setCustomer] = useState('');
  const [discount, setDiscount] = useState(0);
  const [ppnRate, setPpnRate] = useState(0.11);

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

  const addItem = () => {
    setItems([
      ...items,
      { name: '', length: '', color: '', quantity: 1, price: 0, total: 0 },
    ]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const totalPurchase = items.reduce((sum, item) => sum + item.total, 0);
  const ppnValue = totalPurchase * parseFloat(ppnRate);
  const finalTotal = totalPurchase + ppnValue - parseFloat(discount || 0);

  return (
    <div className="sales-receipt-page">
      <h1>Bon Penjualan</h1>

      <div className="summary-container">
        <div className="summary-item">
          <label htmlFor="customer">Nama Customer</label>
          <input
            id="customer"
            type="text"
            placeholder="Masukkan nama customer"
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
            PPN Rate
          </label>
          <input
            id="ppn"
            type="number"
            step="0.01"
            placeholder="0.11"
            value={ppnRate}
            onChange={(e) => setPpnRate(e.target.value)}
          />
        </div>
        <div className="summary-item">
          <label htmlFor="discount">Discount</label>
          <input
            id="discount"
            type="number"
            placeholder="0"
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
                    placeholder="Nama barang"
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
                    placeholder="0"
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
                    placeholder="Warna"
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
                    placeholder="1"
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
                    placeholder="0"
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
                  <span style={{ fontWeight: '600', color: 'var(--primary)' }}>
                    Rp {item.total.toLocaleString('id-ID')}
                  </span>
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
        + Tambah Barang
      </button>
    </div>
  );
};

export default SalesReceiptPage;
