import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/restaurants').then(res => setRestaurants(res.data));
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map(r => (
          <li key={r._id}>{r.name} – {r.cuisine}</li>
        ))}
      </ul>
    </div>
  );
}
