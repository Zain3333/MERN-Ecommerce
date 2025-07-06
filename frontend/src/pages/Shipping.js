import React from 'react';
import { FaTruck, FaClock, FaGlobe, FaBox, FaMapMarkerAlt } from 'react-icons/fa';

const Shipping = () => {
  const shippingMethods = [
    {
      name: 'Standard Shipping',
      time: '3-5 business days',
      cost: 'Free on orders over $50',
      description: 'Our most popular shipping option. Orders are processed within 24 hours and delivered via reliable carriers.',
      icon: FaTruck
    },
    {
      name: 'Express Shipping',
      time: '1-2 business days',
      cost: '$9.99',
      description: 'Get your order quickly with our express shipping option. Perfect for last-minute gifts or urgent needs.',
      icon: FaClock
    },
    {
      name: 'International Shipping',
      time: '7-14 business days',
      cost: 'Starting at $19.99',
      description: 'We ship to most countries worldwide. Delivery times and costs vary by location.',
      icon: FaGlobe
    }
  ];

  const shippingZones = [
    {
      zone: 'Continental US',
      time: '3-5 business days',
      cost: 'Free on orders over $50, $5.99 otherwise'
    },
    {
      zone: 'Alaska & Hawaii',
      time: '5-7 business days',
      cost: 'Free on orders over $75, $12.99 otherwise'
    },
    {
      zone: 'Canada',
      time: '7-10 business days',
      cost: 'Starting at $19.99'
    },
    {
      zone: 'Europe',
      time: '10-14 business days',
      cost: 'Starting at $24.99'
    },
    {
      zone: 'Asia & Australia',
      time: '12-16 business days',
      cost: 'Starting at $29.99'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Information</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Fast, reliable shipping to get your orders to you quickly and safely.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom">
          {/* Shipping Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shipping Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {shippingMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{method.name}</h3>
                  <div className="text-center mb-4">
                    <div className="text-lg font-semibold text-primary-600 mb-1">{method.time}</div>
                    <div className="text-gray-600">{method.cost}</div>
                  </div>
                  <p className="text-gray-600 text-center">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Zones */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shipping Zones & Costs</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Zone</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Delivery Time</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {shippingZones.map((zone, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">{zone.zone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{zone.time}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{zone.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Shipping Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How Shipping Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Place Order</h3>
                <p className="text-gray-600">Choose your items and complete your purchase with your preferred shipping method.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Processing</h3>
                <p className="text-gray-600">We process your order within 24 hours and prepare it for shipment.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Shipment</h3>
                <p className="text-gray-600">Your order is shipped via your chosen carrier with tracking information.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery</h3>
                <p className="text-gray-600">Your order arrives at your doorstep, ready for you to enjoy!</p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Processing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaBox className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Orders are processed within 24 hours of placement (excluding weekends and holidays)</span>
                </li>
                <li className="flex items-start">
                  <FaBox className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>You'll receive a confirmation email with tracking information once your order ships</span>
                </li>
                <li className="flex items-start">
                  <FaBox className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Orders placed after 2 PM EST will be processed the next business day</span>
                </li>
                <li className="flex items-start">
                  <FaBox className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Some items may ship separately if they're coming from different warehouses</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Delivery Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Delivery times are estimates and may vary due to weather, holidays, or carrier delays</span>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Signature may be required for orders over $200 or international shipments</span>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Carriers will attempt delivery during business hours</span>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>If you're not home, carriers will leave a delivery notice with pickup instructions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">When will my order ship?</h3>
                <p className="text-gray-600">Most orders ship within 24 hours of placement (excluding weekends and holidays). You'll receive a shipping confirmation email with tracking information once your order ships.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I track my order?</h3>
                <p className="text-gray-600">You can track your order by logging into your account and going to 'My Orders', or by using the tracking number provided in your shipping confirmation email.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What if my package is lost or damaged?</h3>
                <p className="text-gray-600">If your package is lost or arrives damaged, please contact us within 48 hours of the expected delivery date. We'll work with the carrier to resolve the issue and get you a replacement or refund.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. You can see the estimated cost at checkout.</p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help with Shipping?</h2>
            <p className="text-gray-600 mb-6">
              Have questions about your order or shipping? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Contact Support
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping; 