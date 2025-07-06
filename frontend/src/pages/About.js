import React from 'react';
import { FaUsers, FaAward, FaHeart, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We're passionate about bringing you the best shopping experience with quality products and exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ecommerce, we believe that everyone deserves access to high-quality products at fair prices. 
                Our mission is to create a seamless shopping experience that connects customers with the products they love.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're committed to sustainability, ethical business practices, and building lasting relationships 
                with our customers and partners.
              </p>
              <div className="flex space-x-4">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Shop Now
                </button>
                <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Company Image</span>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver the best experience for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen, learn, and continuously improve.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product meets our high standards before reaching you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Passion</h3>
              <p className="text-gray-600">
                We're passionate about what we do and it shows in every interaction and product we offer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Trust</h3>
              <p className="text-gray-600">
                Building trust through transparency, reliability, and consistent delivery of promises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Our Story Image</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Ecommerce started as a small local shop with a big dream: to make quality 
                products accessible to everyone. What began as a passion project has grown into a trusted 
                destination for shoppers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we serve thousands of customers across the globe, offering a curated selection of 
                products that combine quality, style, and value. Our journey continues as we innovate and 
                expand our offerings to better serve our community.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">4+</div>
                  <div className="text-gray-600">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Ecommerce who work tirelessly to bring you the best experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">CEO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">John Smith</h3>
              <p className="text-primary-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                Visionary leader with 15+ years of experience in e-commerce and retail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">CTO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Johnson</h3>
              <p className="text-primary-600 mb-2">CTO</p>
              <p className="text-gray-600">
                Technology expert driving innovation and digital transformation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">CMO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mike Davis</h3>
              <p className="text-primary-600 mb-2">CMO</p>
              <p className="text-gray-600">
                Marketing strategist focused on customer engagement and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 