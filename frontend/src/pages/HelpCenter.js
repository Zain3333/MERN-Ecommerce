import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaHeadset, FaEnvelope, FaPhone } from 'react-icons/fa';

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = {
    general: [
      {
        question: "How do I create an account?",
        answer: "Creating an account is easy! Click on the 'Sign Up' button in the top right corner, fill in your details including name, email, and password, then click 'Create Account'. You'll receive a confirmation email to verify your account."
      },
      {
        question: "How do I reset my password?",
        answer: "If you've forgotten your password, click on 'Forgot Password' on the login page. Enter your email address and we'll send you a link to reset your password. Make sure to check your spam folder if you don't see the email."
      },
      {
        question: "How can I update my profile information?",
        answer: "To update your profile, log in to your account and go to 'My Profile' in the top navigation. You can edit your personal information, shipping addresses, and payment methods from there."
      },
      {
        question: "Is my personal information secure?",
        answer: "Yes, we take your privacy and security very seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your explicit consent."
      }
    ],
    orders: [
      {
        question: "How do I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and going to 'My Orders'. Click on the specific order to view tracking details."
      },
      {
        question: "Can I cancel my order?",
        answer: "Orders can be cancelled within 1 hour of placement if they haven't been processed for shipping. Go to 'My Orders' and click 'Cancel Order' next to the order you want to cancel. After 1 hour, please contact customer service."
      },
      {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. International shipping may take 7-14 business days depending on the destination."
      },
      {
        question: "What if my order arrives damaged?",
        answer: "If your order arrives damaged, please take photos of the damage and contact us within 48 hours of delivery. We'll arrange for a replacement or refund. You can reach us at support@ecommerce.com or call (555) 123-4567."
      }
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most items. Items must be unused, in original packaging, and in the same condition as received. Some items may have different return policies - check the product page for details."
      },
      {
        question: "How do I return an item?",
        answer: "To return an item, log into your account and go to 'My Orders'. Find the order containing the item you want to return and click 'Return Item'. Follow the instructions to print a return label and ship the item back."
      },
      {
        question: "How long does it take to process a return?",
        answer: "Once we receive your return, it typically takes 3-5 business days to process. You'll receive an email confirmation when your return is processed and your refund is issued. Refunds may take 5-10 business days to appear on your statement."
      },
      {
        question: "Do you offer exchanges?",
        answer: "Yes, we offer exchanges for different sizes, colors, or styles of the same item. You can request an exchange through the return process. If the item you want is out of stock, we'll issue a refund instead."
      }
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and gift cards. All payments are processed securely through our payment partners."
      },
      {
        question: "Is it safe to enter my credit card information?",
        answer: "Yes, your payment information is encrypted and secure. We use industry-standard SSL encryption and never store your full credit card details on our servers. All payments are processed through secure payment gateways."
      },
      {
        question: "Can I save my payment information?",
        answer: "Yes, you can save your payment information for faster checkout. This information is encrypted and stored securely. You can manage your saved payment methods in your account settings."
      },
      {
        question: "Do you offer payment plans?",
        answer: "We offer payment plans through our partner Klarna for orders over $100. You can split your payment into 4 interest-free installments. This option will appear at checkout if you're eligible."
      }
    ]
  };

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredFAQs = Object.keys(faqData).reduce((acc, category) => {
    const filtered = faqData[category].filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  const categories = [
    { id: 'general', name: 'General Questions', icon: '❓' },
    { id: 'orders', name: 'Orders & Shipping', icon: '📦' },
    { id: 'returns', name: 'Returns & Exchanges', icon: '🔄' },
    { id: 'payment', name: 'Payment & Billing', icon: '💳' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Find answers to common questions and get the support you need.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom">
          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>

          {/* Quick Support */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Send Email
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Call us Monday-Friday, 9AM-6PM EST</p>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Call Now
              </button>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-lg text-left transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold">{category.name}</div>
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            
            {searchTerm && Object.keys(filteredFAQs).length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 text-lg">No results found for "{searchTerm}"</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-primary-600 hover:text-primary-700 mt-2"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {(searchTerm ? filteredFAQs[activeCategory] || [] : faqData[activeCategory] || []).map((item, index) => {
                  const key = `${activeCategory}-${index}`;
                  const isExpanded = expandedItems[key];
                  
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleItem(activeCategory, index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-800">{item.question}</span>
                        {isExpanded ? (
                          <FaChevronUp className="text-gray-400" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </button>
                      {isExpanded && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Still Need Help */}
          <div className="bg-primary-50 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Need Help?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Contact Support
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter; 