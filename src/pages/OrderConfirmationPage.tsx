import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, CreditCard, Download } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams();
  const { user } = useUser();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    if (user && orderId) {
      const foundOrder = user.orders.find(o => o.id === orderId);
      setOrder(foundOrder);
    }
  }, [user, orderId]);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your purchase. Your order has been received and is being processed.</p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Order #{order.id}</h2>
              <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
          </div>

          {/* Order Status */}
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-green-600">Order Confirmed</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded">
                <div className="h-1 bg-green-500 rounded w-1/4"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-gray-400">Processing</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-gray-400">Shipped</span>
              </div>
            </div>
          </div>

          {/* Estimated Delivery */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <Truck className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-blue-900">Estimated Delivery</h3>
                <p className="text-blue-800">{estimatedDelivery.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Items Ordered</h3>
            <div className="space-y-4">
              {order.items.map((item: any) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping & Payment Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Shipping Address</span>
              </h3>
              <div className="text-gray-600">
                <p>{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>Payment Method</span>
              </h3>
              <div className="text-gray-600">
                <p>Credit Card ending in ****</p>
                <p>Payment confirmed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            <Download className="w-5 h-5" />
            <span>Download Receipt</span>
          </button>
          
          <Link
            to="/account"
            className="flex items-center justify-center space-x-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Package className="w-5 h-5" />
            <span>Track Order</span>
          </Link>
          
          <Link
            to="/products"
            className="flex items-center justify-center space-x-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link to="/help" className="text-blue-600 hover:text-blue-800">Contact Customer Service</Link>
            <Link to="/returns" className="text-blue-600 hover:text-blue-800">Return Policy</Link>
            <Link to="/shipping" className="text-blue-600 hover:text-blue-800">Shipping Information</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;