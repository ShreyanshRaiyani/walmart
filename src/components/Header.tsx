import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, MapPin, Heart, Leaf } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount, totalEcoPoints } = useCart();
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const categories = [
    'Electronics', 'Clothing', 'Home & Garden', 'Sports & Outdoors',
    'Health & Beauty', 'Toys & Games', 'Books', 'Automotive'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Deliver to New York 10001</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Free shipping on orders $35+</span>
            <span>|</span>
            <Link to="/eco-exchange" className="hover:text-yellow-300 transition-colors">
              Eco Points Exchange
            </Link>
            <span>|</span>
            <span>Download the app</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">Walmart</span>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search everything at Walmart online and in store"
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Eco Points */}
            <Link 
              to="/eco-exchange"
              className="hidden md:flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full hover:bg-green-100 transition-colors"
            >
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">{totalEcoPoints} Eco Points</span>
            </Link>

            {/* Favorites */}
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Heart className="w-6 h-6" />
              <span className="text-sm">Favorites</span>
            </button>

            {/* Account */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                <User className="w-6 h-6" />
                <span className="hidden md:block text-sm">
                  {user ? user.name : 'Account'}
                </span>
              </button>
              
              {/* Account dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {user ? (
                    <>
                      <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        My Account
                      </Link>
                      <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Order History
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign In
                      </Link>
                      <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Create Account
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden md:block text-sm">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search everything..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-medium transition-colors text-sm"
            >
              Search
            </button>
          </form>
          
          {/* Mobile Eco Points */}
          <Link 
            to="/eco-exchange"
            className="flex items-center justify-center space-x-2 bg-green-50 px-3 py-2 rounded-full mt-2 hover:bg-green-100 transition-colors"
          >
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">{totalEcoPoints} Eco Points</span>
          </Link>
        </div>
      </div>

      {/* Categories navigation */}
      <div className="hidden md:block bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products/${category.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                className="text-sm text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors"
              >
                {category}
              </Link>
            ))}
            <Link
              to="/eco-exchange"
              className="text-sm text-green-600 hover:text-green-800 whitespace-nowrap transition-colors font-medium"
            >
              🌱 Eco Exchange
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products/${category.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
            <Link
              to="/eco-exchange"
              className="block text-green-600 hover:text-green-800 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              🌱 Eco Points Exchange
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
