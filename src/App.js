import React, { useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';

function App() {
  const [address, setAddress] = useState('');

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-20 relative">
        <div className="h-[600px] relative">
          <img 
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80"
            alt="Delicious Noodles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to NoodleHouse</h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
              Experience authentic Asian noodles delivered right to your door. Made with fresh ingredients and traditional recipes.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 text-lg font-semibold transition-all transform hover:scale-105">
              Create Custom Ramen
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose NoodleHouse</h2>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80"
              alt="Fresh Noodles"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Authentic Recipes</h3>
            <p className="text-gray-600">Traditional recipes passed down through generations</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80"
              alt="Quick Delivery"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Hot and fresh noodles delivered to your door</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80"
              alt="Quality Ingredients"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">Only the finest ingredients in every dish</p>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section id="menu" className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Popular Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Ramen",
                price: "$12.99",
                image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80"
              },
              {
                name: "Spicy Miso",
                price: "$13.99",
                image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&q=80"
              },
              {
                name: "Vegetarian Delight",
                price: "$11.99",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80"
              }
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">Fresh noodles in savory broth with traditional toppings</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{dish.price}</span>
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold">NoodleHouse</Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
              <Link to="/delivery" className="text-gray-700 hover:text-black">Delivery</Link>
              <Link to="/menu" className="text-gray-700 hover:text-black">Menu</Link>
              <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Order Now
              </button>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">NoodleHouse</h3>
                <p className="text-gray-400">Authentic Asian noodles delivered to your door</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">123 Noodle Street</p>
                <p className="text-gray-400">San Francisco, CA 94110</p>
                <p className="text-gray-400">Phone: (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 NoodleHouse. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;