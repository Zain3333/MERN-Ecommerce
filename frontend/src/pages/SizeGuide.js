import React, { useState } from 'react';
import { FaRuler, FaTshirt, FaShoePrints, FaFemale, FaMale } from 'react-icons/fa';

const SizeGuide = () => {
  const [activeCategory, setActiveCategory] = useState('clothing');

  const sizeCategories = [
    { id: 'clothing', name: 'Clothing', icon: FaTshirt },
    { id: 'shoes', name: 'Shoes', icon: FaShoePrints },
    { id: 'measurements', name: 'How to Measure', icon: FaRuler }
  ];

  const clothingSizes = {
    women: [
      { size: 'XS', chest: '30-32"', waist: '24-26"', hips: '34-36"', us: '2-4', eu: '34-36' },
      { size: 'S', chest: '32-34"', waist: '26-28"', hips: '36-38"', us: '4-6', eu: '36-38' },
      { size: 'M', chest: '34-36"', waist: '28-30"', hips: '38-40"', us: '6-8', eu: '38-40' },
      { size: 'L', chest: '36-38"', waist: '30-32"', hips: '40-42"', us: '8-10', eu: '40-42' },
      { size: 'XL', chest: '38-40"', waist: '32-34"', hips: '42-44"', us: '10-12', eu: '42-44' },
      { size: 'XXL', chest: '40-42"', waist: '34-36"', hips: '44-46"', us: '12-14', eu: '44-46' }
    ],
    men: [
      { size: 'XS', chest: '32-34"', waist: '26-28"', us: '30-32', eu: '42-44' },
      { size: 'S', chest: '34-36"', waist: '28-30"', us: '32-34', eu: '44-46' },
      { size: 'M', chest: '36-38"', waist: '30-32"', us: '34-36', eu: '46-48' },
      { size: 'L', chest: '38-40"', waist: '32-34"', us: '36-38', eu: '48-50' },
      { size: 'XL', chest: '40-42"', waist: '34-36"', us: '38-40', eu: '50-52' },
      { size: 'XXL', chest: '42-44"', waist: '36-38"', us: '40-42', eu: '52-54' }
    ]
  };

  const shoeSizes = {
    women: [
      { us: '5', eu: '35', uk: '3', cm: '22.5' },
      { us: '6', eu: '36', uk: '4', cm: '23.5' },
      { us: '7', eu: '37', uk: '5', cm: '24.5' },
      { us: '8', eu: '38', uk: '6', cm: '25.5' },
      { us: '9', eu: '39', uk: '7', cm: '26.5' },
      { us: '10', eu: '40', uk: '8', cm: '27.5' }
    ],
    men: [
      { us: '7', eu: '40', uk: '6.5', cm: '25.5' },
      { us: '8', eu: '41', uk: '7.5', cm: '26.5' },
      { us: '9', eu: '42', uk: '8.5', cm: '27.5' },
      { us: '10', eu: '43', uk: '9.5', cm: '28.5' },
      { us: '11', eu: '44', uk: '10.5', cm: '29.5' },
      { us: '12', eu: '45', uk: '11.5', cm: '30.5' }
    ]
  };

  const measurementInstructions = [
    {
      title: 'Chest/Bust',
      description: 'Measure around the fullest part of your chest, keeping the tape horizontal.',
      tips: ['Keep the tape snug but not tight', 'Measure at the widest point', 'Keep your arms relaxed']
    },
    {
      title: 'Waist',
      description: 'Measure around your natural waistline, which is typically at the narrowest part of your torso.',
      tips: ['Don\'t suck in your stomach', 'Keep the tape level', 'Measure at your natural waist']
    },
    {
      title: 'Hips',
      description: 'Measure around the fullest part of your hips, keeping the tape horizontal.',
      tips: ['Measure at the widest point', 'Keep the tape level', 'Don\'t pull too tight']
    },
    {
      title: 'Inseam',
      description: 'Measure from the crotch to the bottom of your ankle.',
      tips: ['Use a pair of pants that fit well', 'Measure along the inside seam', 'Stand straight while measuring']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Size Guide</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive size charts and measurement guides.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sizeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                <category.icon className="text-lg" />
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Clothing Sizes */}
          {activeCategory === 'clothing' && (
            <div className="space-y-12">
              {/* Women's Sizes */}
              <div>
                <div className="flex items-center mb-6">
                  <FaFemale className="text-2xl text-pink-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Women's Clothing Sizes</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Size</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Chest</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Waist</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Hips</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">US</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">EU</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {clothingSizes.women.map((size, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-800">{size.size}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.chest}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.waist}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.hips}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.us}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.eu}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Men's Sizes */}
              <div>
                <div className="flex items-center mb-6">
                  <FaMale className="text-2xl text-blue-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Men's Clothing Sizes</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Size</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Chest</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Waist</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">US</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">EU</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {clothingSizes.men.map((size, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-800">{size.size}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.chest}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.waist}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.us}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.eu}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Shoe Sizes */}
          {activeCategory === 'shoes' && (
            <div className="space-y-12">
              {/* Women's Shoes */}
              <div>
                <div className="flex items-center mb-6">
                  <FaFemale className="text-2xl text-pink-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Women's Shoe Sizes</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">US</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">EU</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">UK</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">CM</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {shoeSizes.women.map((size, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-800">{size.us}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.eu}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.uk}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.cm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Men's Shoes */}
              <div>
                <div className="flex items-center mb-6">
                  <FaMale className="text-2xl text-blue-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Men's Shoe Sizes</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">US</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">EU</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">UK</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">CM</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {shoeSizes.men.map((size, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-800">{size.us}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.eu}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.uk}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{size.cm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* How to Measure */}
          {activeCategory === 'measurements' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Measure</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Follow these simple steps to get accurate measurements for the perfect fit. 
                  Use a flexible measuring tape and measure over light clothing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {measurementInstructions.map((instruction, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{instruction.title}</h3>
                    <p className="text-gray-600 mb-4">{instruction.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Tips:</h4>
                      <ul className="space-y-1">
                        {instruction.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Measurement Tips */}
              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">General Measurement Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Before Measuring:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Wear form-fitting clothing</li>
                      <li>• Stand in a natural, relaxed posture</li>
                      <li>• Use a flexible measuring tape</li>
                      <li>• Keep the tape level and snug</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Getting the Best Fit:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Measure yourself or have someone help</li>
                      <li>• Take measurements multiple times for accuracy</li>
                      <li>• Round up to the nearest inch</li>
                      <li>• Consider your preferred fit (loose, regular, tight)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Size Guide Tips */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Size Guide Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📏</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Measure Accurately</h3>
                <p className="text-gray-600">Take your measurements carefully and refer to our size charts for the best fit.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👕</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consider Fit Preference</h3>
                <p className="text-gray-600">Some people prefer a looser or tighter fit. Size up or down accordingly.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy Returns</h3>
                <p className="text-gray-600">If the size doesn't fit perfectly, we offer easy returns and exchanges.</p>
              </div>
            </div>
          </div>

          {/* Need Help */}
          <div className="bg-primary-50 rounded-lg p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help Finding Your Size?</h2>
            <p className="text-gray-600 mb-6">
              Still unsure about your size? Our customer service team is here to help you find the perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Contact Support
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide; 