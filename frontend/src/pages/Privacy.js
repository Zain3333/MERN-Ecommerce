import React from 'react';
import { FaShieldAlt, FaEye, FaLock, FaUserShield } from 'react-icons/fa';

const Privacy = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We respect your privacy and are committed to protecting your personal information.
            </p>
            <p className="text-primary-100 mt-4">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom max-w-4xl">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              At Ecommerce ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>
            <p className="text-gray-600">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <p className="text-gray-600 mb-3">We may collect the following personal information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and billing information</li>
                  <li>Order history and preferences</li>
                  <li>Communication preferences and marketing opt-ins</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-600 mb-3">When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, links clicked)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location information (if you grant permission)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Use Your Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaShieldAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Service Provision</h4>
                    <p className="text-gray-600 text-sm">Process orders, provide customer support, and deliver products</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEye className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Website Improvement</h4>
                    <p className="text-gray-600 text-sm">Analyze usage patterns and improve our website functionality</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaLock className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Security</h4>
                    <p className="text-gray-600 text-sm">Protect against fraud and ensure account security</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaUserShield className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Personalization</h4>
                    <p className="text-gray-600 text-sm">Provide personalized recommendations and content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Information Sharing and Disclosure</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering products</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Security</h2>
            
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response procedures</li>
            </ul>
            
            <p className="text-gray-600 mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cookies and Tracking Technologies</h2>
            
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Types of Cookies We Use:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising and marketing</li>
                </ul>
              </div>
              
              <p className="text-gray-600">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Rights and Choices</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for processing based on consent</li>
              </ul>
              
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us using the information provided below. We will respond to your request within the timeframes required by applicable law.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Children's Privacy</h2>
            
            <p className="text-gray-600">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </div>

          {/* International Transfers */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">International Data Transfers</h2>
            
            <p className="text-gray-600">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Changes to This Privacy Policy</h2>
            
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@ecommerce.com</p>
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

export default Privacy; 