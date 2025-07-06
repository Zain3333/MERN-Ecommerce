import React from 'react';
import { FaGavel, FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Terms = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-primary-100 mt-4">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom max-w-4xl">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service ("Terms") govern your use of the Ecommerce website and services operated by Ecommerce ("we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms and all applicable laws and regulations.
            </p>
            <p className="text-gray-600">
              If you do not agree with any of these terms, you are prohibited from using or accessing our services. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
          </div>

          {/* Use License */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Use License</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Permission is granted to temporarily download one copy of the materials (information or software) on Ecommerce's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on Ecommerce's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <p className="text-gray-600">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Ecommerce at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>
          </div>

          {/* Account Registration */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Registration and Responsibilities</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                To access certain features of our services, you may be required to create an account. You are responsible for:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Providing accurate, current, and complete information during registration</li>
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring your account information is kept up to date</li>
              </ul>
              
              <p className="text-gray-600">
                We reserve the right to terminate accounts that violate these terms or are used for fraudulent purposes.
              </p>
            </div>
          </div>

          {/* Product Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Information and Pricing</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                While we strive to provide accurate product information, we do not warrant that product descriptions, prices, or other content on our website are accurate, complete, reliable, current, or error-free.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Product Availability</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>Products are subject to availability</li>
                    <li>We reserve the right to discontinue products</li>
                    <li>Prices may change without notice</li>
                    <li>Images are for illustration purposes only</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Pricing</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>All prices are in USD unless otherwise stated</li>
                    <li>Prices include applicable taxes</li>
                    <li>Shipping costs are additional</li>
                    <li>We may offer promotional pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ordering and Payment */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ordering and Payment</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                By placing an order, you represent that you are legally capable of entering into binding contracts and that the information you provide is accurate and complete.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Order Acceptance</h4>
                  <p className="text-gray-600">
                    All orders are subject to acceptance and availability. We reserve the right to refuse any order for any reason, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 mt-2">
                    <li>Product unavailability</li>
                    <li>Pricing errors</li>
                    <li>Suspected fraudulent activity</li>
                    <li>Violation of these terms</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Payment Terms</h4>
                  <p className="text-gray-600">
                    Payment is due at the time of order placement. We accept various payment methods as indicated on our website. You authorize us to charge your payment method for the total amount of your order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping and Delivery */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping and Delivery</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Delivery times are estimates and may vary based on factors beyond our control. We are not responsible for delays caused by:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Weather conditions</li>
                <li>Carrier delays</li>
                <li>Customs processing</li>
                <li>Incorrect shipping addresses</li>
                <li>Force majeure events</li>
              </ul>
              
              <p className="text-gray-600">
                Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
              </p>
            </div>
          </div>

          {/* Returns and Refunds */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Returns and Refunds</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Our return policy is designed to ensure your satisfaction. Please refer to our Returns & Exchanges page for detailed information about:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Return eligibility and timeframes</li>
                <li>Return shipping procedures</li>
                <li>Refund processing times</li>
                <li>Non-returnable items</li>
                <li>Exchange options</li>
              </ul>
              
              <p className="text-gray-600">
                We reserve the right to modify our return policy at any time. Changes will be effective immediately upon posting.
              </p>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Prohibited Uses</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. You agree not to:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Harass, abuse, or harm others</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services for commercial purposes without authorization</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Intellectual Property Rights</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                The content on our website, including but not limited to text, graphics, images, logos, and software, is owned by Ecommerce or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <p className="text-gray-600">
                You may not reproduce, distribute, modify, or create derivative works of any content without our express written consent.
              </p>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Disclaimers and Limitations</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaExclamationTriangle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Service Availability</h4>
                  <p className="text-gray-600">Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaExclamationTriangle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Limitation of Liability</h4>
                  <p className="text-gray-600">In no event shall Ecommerce be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaExclamationTriangle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Third-Party Links</h4>
                  <p className="text-gray-600">Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Indemnification */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Indemnification</h2>
            
            <p className="text-gray-600">
              You agree to indemnify, defend, and hold harmless Ecommerce and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of our services or violation of these Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Governing Law and Dispute Resolution</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
              </p>
              
              <p className="text-gray-600">
                Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Changes to Terms</h2>
            
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> legal@ecommerce.com</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Shopping Street, New York, NY 10001</p>
            </div>
            
            <p className="text-gray-600 mt-6">
              We will make every effort to respond to your inquiry promptly and address your concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 