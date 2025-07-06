import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      id: 'account',
      title: 'Account & Profile',
      icon: '👤',
      questions: [
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
      ]
    },
    {
      id: 'orders',
      title: 'Orders & Shipping',
      icon: '📦',
      questions: [
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
      ]
    },
    {
      id: 'returns',
      title: 'Returns & Exchanges',
      icon: '🔄',
      questions: [
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
      ]
    },
    {
      id: 'payment',
      title: 'Payment & Billing',
      icon: '💳',
      questions: [
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
    },
    {
      id: 'products',
      title: 'Products & Inventory',
      icon: '🛍️',
      questions: [
        {
          question: "How do I know if an item is in stock?",
          answer: "Product availability is shown on each product page. If an item is out of stock, you'll see an 'Out of Stock' message. You can also sign up for restock notifications on the product page."
        },
        {
          question: "Do you offer product warranties?",
          answer: "Many of our products come with manufacturer warranties. Warranty information is listed on individual product pages. We also offer extended warranty options for select items."
        },
        {
          question: "Can I request a specific product?",
          answer: "Yes! If you're looking for a specific product that we don't currently carry, you can contact our customer service team. We're always looking to expand our product selection based on customer requests."
        },
        {
          question: "Are your products authentic?",
          answer: "Yes, all our products are 100% authentic. We work directly with manufacturers and authorized distributors to ensure the quality and authenticity of every item we sell."
        }
      ]
    }
  ];

  const toggleItem = (categoryId, index) => {
    const key = `${categoryId}-${index}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Find answers to the most common questions about our products and services.
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

          {/* FAQ Categories */}
          <div className="space-y-8">
            {(searchTerm ? filteredFAQs : faqCategories).map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const key = `${category.id}-${index}`;
                    const isExpanded = expandedItems[key];
                    
                    return (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleItem(category.id, index)}
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
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchTerm && filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any answers matching "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Clear search and show all questions
              </button>
            </div>
          )}

          {/* Still Need Help */}
          <div className="bg-primary-50 rounded-lg p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Contact Support
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Live Chat
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 