import React from 'react';
import { FaUndo, FaBox, FaCreditCard, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const Returns = () => {
  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Log into your account and go to "My Orders" to start the return process.',
      icon: FaUndo
    },
    {
      step: 2,
      title: 'Package Item',
      description: 'Securely package the item in its original packaging with all accessories.',
      icon: FaBox
    },
    {
      step: 3,
      title: 'Ship Back',
      description: 'Use the provided return label to ship the item back to us.',
      icon: FaShieldAlt
    },
    {
      step: 4,
      title: 'Get Refund',
      description: 'Once we receive and process your return, you\'ll get your refund.',
      icon: FaCreditCard
    }
  ];

  const returnPolicy = [
    {
      category: 'Return Window',
      details: '30 days from delivery date'
    },
    {
      category: 'Condition Required',
      details: 'Unused, in original packaging with all tags attached'
    },
    {
      category: 'Return Shipping',
      details: 'Free for defective items, customer pays for size/style changes'
    },
    {
      category: 'Refund Time',
      details: '3-5 business days after we receive your return'
    },
    {
      category: 'Refund Method',
      details: 'Original payment method'
    }
  ];

  const nonReturnableItems = [
    'Personal care items (for hygiene reasons)',
    'Gift cards and digital products',
    'Custom or personalized items',
    'Items marked as "Final Sale"',
    'Items without original packaging or tags'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Returns & Exchanges</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Easy returns and exchanges to ensure you're completely satisfied with your purchase.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom">
          {/* Return Policy Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Return Policy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {returnPolicy.map((policy, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{policy.category}</h3>
                  <p className="text-gray-600">{policy.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Return Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Return an Item</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {returnSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-2xl text-primary-600" />
                  </div>
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Return vs Exchange */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Returns</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Get a full refund to your original payment method</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Processed within 3-5 business days of receiving your return</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Available for any reason within 30 days</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Free return shipping for defective items</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Exchanges</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Exchange for a different size, color, or style</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>New item shipped once we receive your return</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Price adjustments for more expensive items</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Customer pays return shipping for size/style changes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Non-Returnable Items */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Non-Returnable Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nonReturnableItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <FaClock className="text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How long do I have to return an item?</h3>
                <p className="text-gray-600">You have 30 days from the delivery date to return most items. Some items may have different return windows - check the product page for specific details.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What condition does my return need to be in?</h3>
                <p className="text-gray-600">Items must be unused, in their original packaging, and have all tags attached. Items that show signs of wear or use may not be accepted for return.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does it take to get my refund?</h3>
                <p className="text-gray-600">Once we receive and process your return, refunds are typically issued within 3-5 business days. It may take 5-10 business days for the refund to appear on your statement.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I return a gift?</h3>
                <p className="text-gray-600">Yes, gifts can be returned within 30 days of delivery. You'll need the order number or gift receipt. Refunds for gifts will be issued as store credit.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What if my item arrives damaged?</h3>
                <p className="text-gray-600">If your item arrives damaged, please take photos and contact us within 48 hours of delivery. We'll arrange for a replacement or refund at no cost to you.</p>
              </div>
            </div>
          </div>

          {/* Start Return Button */}
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Return?</h2>
            <p className="text-gray-600 mb-6">
              Log into your account to begin the return process. It's quick and easy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Start Return
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns; 