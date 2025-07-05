import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Truck, Zap, Bike, Store, Leaf, Package } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { 
    items, 
    total, 
    itemCount, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    updateBagType,
    selectedDelivery,
    setDelivery,
    deliveryOptions,
    totalEcoPoints
  } = useCart();

  const getDeliveryIcon = (iconName: string) => {
    switch (iconName) {
      case 'truck': return <Truck className="w-5 h-5" />;
      case 'zap': return <Zap className="w-5 h-5" />;
      case 'bike': return <Bike className="w-5 h-5" />;
      case 'store': return <Store className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to get started!</p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = selectedDelivery ? selectedDelivery.price : 0;
  const tax = subtotal * 0.08;
  const finalTotal = subtotal + deliveryFee + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">{itemCount} items in your cart</p>
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                {totalEcoPoints} Eco Points Earned
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Items List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Clear All
                  </button>
                </div>
              </div>
              
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">In Stock</p>
                        
                        {/* Bag Selection */}
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Choose your bag:</p>
                          <div className="flex space-x-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name={`bag-${item.id}`}
                                value="plastic"
                                checked={item.bagType === 'plastic'}
                                onChange={() => updateBagType(item.id, 'plastic')}
                                className="text-blue-600"
                              />
                              <span className="text-sm text-gray-700">Plastic Bag (Free)</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name={`bag-${item.id}`}
                                value="paper"
                                checked={item.bagType === 'paper'}
                                onChange={() => updateBagType(item.id, 'paper')}
                                className="text-green-600"
                              />
                              <div className="flex items-center space-x-1">
                                <span className="text-sm text-gray-700">Paper Bag</span>
                                <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded">
                                  <Leaf className="w-3 h-3 text-green-600" />
                                  <span className="text-xs text-green-700 font-medium">
                                    +{item.quantity * 5} Eco Points
                                  </span>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800 p-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-600">
                          ${item.price.toFixed(2)} each
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Options</h3>
              <div className="space-y-3">
                {deliveryOptions.map((option) => (
                  <label key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="delivery"
                      value={option.id}
                      checked={selectedDelivery?.id === option.id}
                      onChange={() => setDelivery(option)}
                      className="text-blue-600"
                    />
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="text-blue-600">
                        {getDeliveryIcon(option.icon)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{option.name}</span>
                          {option.ecoPoints > 0 && (
                            <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded">
                              <Leaf className="w-3 h-3 text-green-600" />
                              <span className="text-xs text-green-700 font-medium">
                                +{option.ecoPoints} Eco Points
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{option.estimatedTime}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-medium text-gray-900">
                          {option.price === 0 ? 'FREE' : `$${option.price.toFixed(2)}`}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Eco Points Summary */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">Eco Points Breakdown</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-green-700">
                    <span>Paper bags:</span>
                    <span>+{items.reduce((points, item) => points + (item.bagType === 'paper' ? item.quantity * 5 : 0), 0)} points</span>
                  </div>
                  {selectedDelivery && selectedDelivery.ecoPoints > 0 && (
                    <div className="flex justify-between text-green-700">
                      <span>Eco delivery:</span>
                      <span>+{selectedDelivery.ecoPoints} points</span>
                    </div>
                  )}
                  <div className="border-t border-green-200 pt-1 flex justify-between font-medium text-green-800">
                    <span>Total:</span>
                    <span>+{totalEcoPoints} points</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center block transition-colors"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/products"
                  className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium text-center block transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Shipping Benefits */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Benefits</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Free shipping on orders $35+</li>
                  <li>• Earn eco points for sustainable choices</li>
                  <li>• 90-day return policy</li>
                  <li>• Same-day pickup available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
