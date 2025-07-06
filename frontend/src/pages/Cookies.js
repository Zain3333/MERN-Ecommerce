import React, { useState } from 'react';
import { FaCookieBite, FaEye, FaCog, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const Cookies = () => {
  const [activeCategory, setActiveCategory] = useState('essential');
  const lastUpdated = "January 15, 2024";

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly.',
      icon: FaShieldAlt,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      examples: [
        'Authentication cookies',
        'Shopping cart cookies',
        'Security cookies',
        'Load balancing cookies'
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: FaEye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ]
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: FaCog,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      examples: [
        'Language preferences',
        'Region settings',
        'User preferences',
        'Form auto-fill'
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaigns.',
      icon: FaCookieBite,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      examples: [
        'Advertising cookies',
        'Social media cookies',
        'Retargeting cookies',
        'Campaign tracking'
      ]
    }
  ];

  const cookieDetails = {
    essential: [
      { name: 'session_id', purpose: 'Maintains your session while browsing', duration: 'Session' },
      { name: 'cart_token', purpose: 'Stores your shopping cart information', duration: 'Session' },
      { name: 'csrf_token', purpose: 'Protects against cross-site request forgery', duration: 'Session' }
    ],
    analytics: [
      { name: '_ga', purpose: 'Google Analytics - tracks unique visitors', duration: '2 years' },
      { name: '_gid', purpose: 'Google Analytics - tracks user sessions', duration: '24 hours' },
      { name: '_gat', purpose: 'Google Analytics - throttles request rate', duration: '1 minute' }
    ],
    functional: [
      { name: 'language', purpose: 'Remembers your language preference', duration: '1 year' },
      { name: 'theme', purpose: 'Stores your theme preference', duration: '1 year' },
      { name: 'notifications', purpose: 'Remembers notification preferences', duration: '1 year' }
    ],
    marketing: [
      { name: '_fbp', purpose: 'Facebook Pixel - tracks conversions', duration: '3 months' },
      { name: 'ads_prefs', purpose: 'Stores advertising preferences', duration: '1 year' },
      { name: 'campaign_id', purpose: 'Tracks marketing campaign effectiveness', duration: '30 days' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your browsing experience.
            </p>
            <p className="text-primary-100 mt-4">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom max-w-4xl">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better browsing experience by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Remembering your preferences and settings</li>
              <li>Analyzing how you use our website</li>
              <li>Providing personalized content and advertisements</li>
              <li>Ensuring the website functions properly</li>
            </ul>
          </div>

          {/* Cookie Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
                    activeCategory === category.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className={`text-2xl ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{category.name}</h3>
                  <p className="text-gray-600 text-sm text-center mb-4">{category.description}</p>
                  <div className="space-y-1">
                    {category.examples.map((example, index) => (
                      <div key={index} className="text-xs text-gray-500 text-center">• {example}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {cookieCategories.find(cat => cat.id === activeCategory)?.name} - Detailed Information
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Cookie Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Purpose</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cookieDetails[activeCategory]?.map((cookie, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{cookie.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Third-Party Cookies</h2>
            
            <p className="text-gray-600 mb-4">
              We may use third-party services that place cookies on your device. These services help us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Analytics Services</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Google Analytics</li>
                  <li>Facebook Pixel</li>
                  <li>Hotjar</li>
                  <li>Mixpanel</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Advertising Services</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Google Ads</li>
                  <li>Facebook Ads</li>
                  <li>Instagram Ads</li>
                  <li>Retargeting platforms</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-600 mt-6">
              These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies for more information.
            </p>
          </div>

          {/* Cookie Management */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Managing Your Cookie Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Browser Settings</h3>
                <p className="text-gray-600 mb-3">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Cookie Consent</h3>
                <p className="text-gray-600 mb-3">
                  When you first visit our website, you'll see a cookie consent banner. You can:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Accept all cookies</li>
                  <li>Customize your preferences</li>
                  <li>Reject non-essential cookies</li>
                  <li>Change your preferences at any time</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Opt-Out Options</h3>
                <p className="text-gray-600">
                  For advertising cookies, you can opt out through industry organizations like the Digital Advertising Alliance (DAA) or the Network Advertising Initiative (NAI).
                </p>
              </div>
            </div>
          </div>

          {/* Impact of Disabling Cookies */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Impact of Disabling Cookies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Essential Cookies
                </h4>
                <p className="text-gray-600 text-sm">
                  These cookies cannot be disabled as they are necessary for basic website functionality. Disabling them may prevent the website from working properly.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <FaCheckCircle className="text-blue-500 mr-2" />
                  Optional Cookies
                </h4>
                <p className="text-gray-600 text-sm">
                  You can disable these cookies, but doing so may affect your browsing experience and limit certain features.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Note:</h4>
              <p className="text-yellow-700 text-sm">
                Disabling cookies may affect website functionality, user experience, and the availability of certain features. Some parts of our website may not work properly without cookies.
              </p>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Updates to This Cookie Policy</h2>
            
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Questions About Cookies?</h2>
            
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@ecommerce.com</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Shopping Street, New York, NY 10001</p>
            </div>
            
            <p className="text-gray-600 mt-6">
              We're here to help you understand how we use cookies and address any concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies; 