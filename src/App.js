import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import restaurantLogo from './restaurant-logo.png';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'images/gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'images/sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'images/ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'images/matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'images/mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'images/yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'images/takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'images/sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'images/okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'images/katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  const addToCart = (id, price) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
    setTotal((prevTotal) => prevTotal + price);
  };

  const removeFromCart = (id, price) => {
    setCart((prevCart) => {
      if (!prevCart[id]) return prevCart;
      const updatedCart = { ...prevCart };
      updatedCart[id]--;
      if (updatedCart[id] === 0) delete updatedCart[id];
      return updatedCart;
    });
  
    // Ensure total doesn't go below zero
    setTotal((prevTotal) => Math.max(0, prevTotal - price));
  };

  const clearCart = () => {
    setCart({});
    setTotal(0);
  };

  const handleOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert("No items in cart");
      return;
    }

    const orderSummary = menuItems
      .filter((item) => cart[item.id]) // Only include items in the cart
      .map((item) => `${cart[item.id]} ${item.title}`)
      .join(", ");

    alert(`Order placed!\n${orderSummary}`);
  };

  return (
    <div>
      <Header 
        title="Campus Cafe" 
        restaurantLogo={restaurantLogo} 
        description1="Delicious, From-Scratch Recipes Close at Hand" 
        description2="The Fresh Choice of UT!" 
      />
      <div className="overall_container">
        <div className="menu">
          {menuItems.map((item) => (
            <MenuItem 
              key={item.id} 
              title={item.title} 
              description={item.description} 
              image={item.imageName} 
              price={item.price} 
              onAdd={() => addToCart(item.id, item.price)} 
              onRemove={() => removeFromCart(item.id, item.price)} 
              quantity={cart[item.id] || 0}
            />
          ))}
        </div>
      </div>
      <div className="bottom_container">
      <div className="cart-summary mt-4">
          <h4>Subtotal: ${total.toFixed(2)}</h4>
          <button className="btn btn-success me-2" onClick={handleOrder}>Order</button>
          <button className="btn btn-danger" onClick={clearCart}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;