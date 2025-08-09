import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function OrderForm() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/menu').then(res => setMenuItems(res.data));
  }, []);

  const handleOrder = async () => {
    const total = selectedItems.reduce((sum, id) => {
      const item = menuItems.find(m => m._id === id);
      return sum + (item?.price || 0);
    }, 0);

    await axios.post('http://localhost:3000/orders', {
      items: selectedItems,
      customerName,
      total,
    }, { withCredentials: true });

    alert('Order placed!');
  };

  return (
    <div>
      <h2>Place Order</h2>
      <input value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="Your Name" />
      <ul>
        {menuItems.map(item => (
          <li key={item._id}>
            <label>
              <input
                type="checkbox"
                value={item._id}
                onChange={e => {
                  const id = e.target.value;
                  setSelectedItems(prev =>
                    e.target.checked ? [...prev, id] : prev.filter(i => i !== id)
                  );
                }}
              />
              {item.name} – ₹{item.price}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleOrder}>Submit Order</button>
    </div>
  );
}
