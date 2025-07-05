import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Star, ShoppingCart, Gift, Zap, ArrowLeft, Info } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface Plant {
  id: string;
  name: string;
  price: number;
  ecoPointsDiscount: number;
  freeAtPoints: number;
  image: string;
  description: string;
  benefits: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  size: string;
  rating: number;
  reviews: number;
  category: 'Indoor' | 'Outdoor' | 'Herb' | 'Succulent' | 'Flowering';
}

const plants: Plant[] = [
  {
    id: 'plant-1',
    name: 'Snake Plant (Sansevieria)',
    price: 25.99,
    ecoPointsDiscount: 10,
    freeAtPoints: 200,
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Perfect air-purifying plant that thrives in low light conditions.',
    benefits: ['Air purification', 'Low maintenance', 'Drought tolerant'],
    difficulty: 'Easy',
    size: '12-18 inches',
    rating: 4.8,
    reviews: 324,
    category: 'Indoor'
  },
  {
    id: 'plant-2',
    name: 'Peace Lily',
    price: 18.99,
    ecoPointsDiscount: 8,
    freeAtPoints: 150,
    image: 'https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Beautiful flowering plant that removes harmful toxins from the air.',
    benefits: ['Beautiful white flowers', 'Air purification', 'Humidity indicator'],
    difficulty: 'Easy',
    size: '16-24 inches',
    rating: 4.6,
    reviews: 256,
    category: 'Flowering'
  },
  {
    id: 'plant-3',
    name: 'Monstera Deliciosa',
    price: 45.99,
    ecoPointsDiscount: 20,
    freeAtPoints: 400,
    image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Stunning tropical plant with iconic split leaves.',
    benefits: ['Instagram-worthy', 'Fast growing', 'Air purifying'],
    difficulty: 'Medium',
    size: '24-36 inches',
    rating: 4.9,
    reviews: 189,
    category: 'Indoor'
  },
  {
    id: 'plant-4',
    name: 'Lavender Plant',
    price: 22.99,
    ecoPointsDiscount: 12,
    freeAtPoints: 180,
    image: 'https://images.pexels.com/photos/1136872/pexels-photo-1136872.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Aromatic herb perfect for relaxation and natural fragrance.',
    benefits: ['Natural fragrance', 'Stress relief', 'Attracts pollinators'],
    difficulty: 'Medium',
    size: '12-20 inches',
    rating: 4.7,
    reviews: 412,
    category: 'Herb'
  },
  {
    id: 'plant-5',
    name: 'Succulent Garden Set',
    price: 32.99,
    ecoPointsDiscount: 15,
    freeAtPoints: 250,
    image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Collection of 6 different colorful succulents in decorative pots.',
    benefits: ['Low water needs', 'Colorful variety', 'Perfect for beginners'],
    difficulty: 'Easy',
    size: '3-6 inches each',
    rating: 4.5,
    reviews: 298,
    category: 'Succulent'
  },
  {
    id: 'plant-6',
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    ecoPointsDiscount: 30,
    freeAtPoints: 500,
    image: 'https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Statement plant with large, glossy leaves perfect for modern homes.',
    benefits: ['Statement piece', 'Air purifying', 'Architectural beauty'],
    difficulty: 'Hard',
    size: '36-48 inches',
    rating: 4.4,
    reviews: 167,
    category: 'Indoor'
  },
  {
    id: 'plant-7',
    name: 'Herb Garden Starter Kit',
    price: 28.99,
    ecoPointsDiscount: 14,
    freeAtPoints: 220,
    image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Complete kit with basil, mint, parsley, and cilantro seeds.',
    benefits: ['Fresh herbs at home', 'Cooking enhancement', 'Educational'],
    difficulty: 'Easy',
    size: 'Starter kit',
    rating: 4.6,
    reviews: 445,
    category: 'Herb'
  },
  {
    id: 'plant-8',
    name: 'Bird of Paradise',
    price: 55.99,
    ecoPointsDiscount: 25,
    freeAtPoints: 450,
    image: 'https://images.pexels.com/photos/7084308/pexels-photo-7084308.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Tropical plant with stunning orange and blue flowers.',
    benefits: ['Exotic flowers', 'Tropical vibes', 'Air purifying'],
    difficulty: 'Medium',
    size: '36-60 inches',
    rating: 4.8,
    reviews: 134,
    category: 'Flowering'
  },
  {
    id: 'plant-9',
    name: 'Outdoor Garden Mix',
    price: 39.99,
    ecoPointsDiscount: 18,
    freeAtPoints: 300,
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Perfect mix of outdoor plants for garden beds and containers.',
    benefits: ['Weather resistant', 'Seasonal blooms', 'Pollinator friendly'],
    difficulty: 'Medium',
    size: 'Various sizes',
    rating: 4.5,
    reviews: 223,
    category: 'Outdoor'
  }
];

const EcoExchangePage: React.FC = () => {
  const { totalEcoPoints, addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Indoor', 'Outdoor', 'Herb', 'Succulent', 'Flowering'];

  const filteredPlants = plants.filter(plant => 
    selectedCategory === 'All' || plant.category === selectedCategory
  );

  const sortedPlants = [...filteredPlants].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'eco-points':
        return b.ecoPointsDiscount - a.ecoPointsDiscount;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const calculateDiscountedPrice = (plant: Plant) => {
    const discount = Math.min(totalEcoPoints, plant.ecoPointsDiscount);
    return Math.max(0, plant.price - discount);
  };

  const canGetFree = (plant: Plant) => {
    return totalEcoPoints >= plant.freeAtPoints;
  };

  const handlePurchase = (plant: Plant) => {
    if (canGetFree(plant)) {
      // Free plant - just add to cart
      addItem({
        id: plant.id,
        name: `${plant.name} (FREE with Eco Points)`,
        price: 0,
        image: plant.image
      });
    } else {
      // Discounted plant
      const discountedPrice = calculateDiscountedPrice(plant);
      addItem({
        id: plant.id,
        name: plant.name,
        price: discountedPrice,
        image: plant.image,
        originalPrice: plant.price
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Eco Points Exchange</h1>
              <p className="text-gray-600">Use your eco points to get discounts on plants or claim free plants!</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="text-3xl font-bold text-green-700">{totalEcoPoints}</span>
              </div>
              <p className="text-sm text-green-600 font-medium">Available Eco Points</p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <Info className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">How Eco Points Work</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>1 Eco Point = $1 discount</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4" />
                  <span>Earn points with eco-friendly choices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4" />
                  <span>Get FREE plants with enough points</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="eco-points">Most Eco Points Discount</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPlants.map((plant) => {
            const discountedPrice = calculateDiscountedPrice(plant);
            const isFree = canGetFree(plant);
            const discount = Math.min(totalEcoPoints, plant.ecoPointsDiscount);

            return (
              <div key={plant.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-48 object-cover"
                  />
                  
                  {isFree && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Gift className="w-4 h-4" />
                      <span>FREE!</span>
                    </div>
                  )}
                  
                  {!isFree && discount > 0 && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ${discount} OFF
                    </div>
                  )}
                  
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(plant.difficulty)}`}>
                    {plant.difficulty}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{plant.name}</h3>
                    <span className="text-sm text-gray-500">{plant.size}</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(plant.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({plant.reviews})</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{plant.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {plant.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    {isFree ? (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">FREE</div>
                        <div className="text-sm text-gray-600 mb-4">
                          With {plant.freeAtPoints} eco points
                        </div>
                        <button
                          onClick={() => handlePurchase(plant)}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                        >
                          <Gift className="w-5 h-5" />
                          <span>Claim Free Plant</span>
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-gray-900">
                                ${discountedPrice.toFixed(2)}
                              </span>
                              {discount > 0 && (
                                <span className="text-lg text-gray-500 line-through">
                                  ${plant.price.toFixed(2)}
                                </span>
                              )}
                            </div>
                            {discount > 0 && (
                              <div className="flex items-center space-x-1 text-sm text-green-600">
                                <Leaf className="w-4 h-4" />
                                <span>Save ${discount} with eco points</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-xs text-gray-500 mb-3">
                          Need {plant.freeAtPoints} points for free plant
                          {plant.freeAtPoints - totalEcoPoints > 0 && (
                            <span className="text-orange-600">
                              {' '}({plant.freeAtPoints - totalEcoPoints} more needed)
                            </span>
                          )}
                        </div>
                        
                        <button
                          onClick={() => handlePurchase(plant)}
                          disabled={totalEcoPoints === 0 && discountedPrice === plant.price}
                          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Plants Message */}
        {sortedPlants.length === 0 && (
          <div className="text-center py-12">
            <Leaf className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No plants found in this category.</p>
          </div>
        )}

        {/* Earn More Points CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Want More Eco Points?</h3>
          <p className="text-green-100 mb-6">
            Make eco-friendly choices in your shopping to earn more points and unlock free plants!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cart"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Choose Paper Bags (+5 points per item)
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoExchangePage;
