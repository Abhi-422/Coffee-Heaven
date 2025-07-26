// src/pages/Menu.js
import React from 'react';

function Menu() {
  const products = [
    {
      name: 'Espresso',
      price: '$3.00',
      description: 'Strong and bold single shot of coffee.',
      image: 'https://images.unsplash.com/photo-1596952954288-16862d37405b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXNwcmVzc298ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Cappuccino',
      price: '$3.50',
      description: 'Espresso with steamed milk and foam.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Latte',
      price: '$4.00',
      description: 'Creamy blend of espresso and milk.',
      image: 'https://plus.unsplash.com/premium_photo-1663932463883-897e71481fc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGF0dGV8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Mocha',
      price: '$4.50',
      description: 'Chocolate-flavored coffee with steamed milk.',
      image: 'https://images.unsplash.com/photo-1632845407875-10b4d85e6bf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9jaGF8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Cold Brew',
      price: '$4.00',
      description: 'Slow-steeped coffee served cold.',
      image: 'https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29sZCUyMEJyZXd8ZW58MHx8MHx8fDA%3D',
    },
  ];

  const memberships = [
    {
      title: 'Coffee Lover Plan',
      price: '$9.99/month',
      features: ['1 free drink daily', '10% off all purchases'],
    },
    {
      title: 'Coffee Addict Plan',
      price: '$19.99/month',
      features: ['2 free drinks daily', '20% off everything', 'Free delivery'],
    },
  ];

  return (
    <div className="menu">
      <h2>Our Coffee Selection</h2>
      <div className="menu-grid">
        {products.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p className="menu-price">{item.price}</p>
              <p>{item.description}</p>
              <button className="menu-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Membership Section */}
      <div className="membership">
        <h2>Membership Plans</h2>
        <div className="menu-grid">
          {memberships.map((plan, index) => (
            <div className="menu-card" key={index}>
              <div className="menu-content">
                <h3>{plan.title}</h3>
                <p className="menu-price">{plan.price}</p>
                <ul>
                  {plan.features.map((feat, i) => (
                    <li style={{ marginLeft: '20px' }} key={i}>{feat}</li>
                  ))}
                </ul>
                <button className="menu-btn">Subscribe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
