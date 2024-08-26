// src/components/DestinationsSection.js
import React from 'react';
import '../componentsCss/DestinationsSection.css';

const destinations = [
  { name: 'Paris', description: 'The city of lights and love.', imageUrl: 'https://plus.unsplash.com/premium_photo-1718035557075-5111d9d906d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHBhcmlzfGVufDB8fDB8fHww',
    review:"⭐⭐⭐⭐⭐",
   },
  { name: 'Bali', description: 'A tropical paradise in Indonesia.', imageUrl: 'https://images.unsplash.com/photo-1628671708594-b8e9358dc5bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review:"⭐⭐⭐⭐⭐",
   },
  { name: 'New York', description: 'The city that never sleeps.', imageUrl: 'https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review:"⭐⭐⭐⭐⭐",
   },
  {
    name: 'Cappadocia',
    description: 'The city of gods and monsters.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661951651092-e0fcb31e70ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review:"⭐⭐⭐⭐⭐",
  },
  {
    name: 'Venice',
    description: 'The city of love and adventure.',
    imageUrl: 'https://images.unsplash.com/photo-1574530638414-88578d1f73a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review:"⭐⭐⭐⭐⭐"
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations-section">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.imageUrl} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <p>{destination.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationsSection;
