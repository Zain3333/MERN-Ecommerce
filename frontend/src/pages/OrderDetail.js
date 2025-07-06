import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../store/slices/orderSlice';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { FaArrowLeft, FaBox, FaTruck, FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendar, FaCreditCard } from 'react-icons/fa';

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    if (id) {
      dispatch(fetchOrder(id));
    }
  }, [dispatch, id]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Processing':
        return <FaBox className="w-5 h-5" />;
      case 'Shipped':
        return <FaTruck className="w-5 h-5" />;
      case 'Delivered':
        return <FaCheckCircle className="w-5 h-5" />;
      case 'Cancelled':
        return <FaTimesCircle className="w-5 h-5" />;
      default:
        return <FaBox className="w-5 h-5" />;
    }
  };

  const getStatusStep = (status) => {
    const steps = ['Processing', 'Shipped', 'Delivered'];
    return steps.indexOf(status) + 1;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">😕</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Order not found</h3>
          <p className="text-gray-600 mb-4">The order you're looking for doesn't exist</p>
          <button
            onClick={() => navigate('/orders')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/orders')}
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Orders
          </button>
        </div>

        {/* Order Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Order #{order._id.slice(-8).toUpperCase()}
              </h1>
              <p className="text-gray-600">
                Placed on {new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString()}
              </p>
            </div>
            <div className="text-right">
              <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(order.orderStatus)}`}>
                {getStatusIcon(order.orderStatus)}
                {order.orderStatus}
              </span>
            </div>
          </div>

          {/* Order Progress */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              {['Processing', 'Shipped', 'Delivered'].map((step, index) => {
                const isCompleted = getStatusStep(order.orderStatus) > index;
                const isCurrent = getStatusStep(order.orderStatus) === index + 1;
                
                return (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-green-500 text-white' : 
                      isCurrent ? 'bg-primary-600 text-white' : 
                      'bg-gray-300 text-gray-600'
                    }`}>
                      {isCompleted ? <FaCheckCircle /> : index + 1}
                    </div>
                    <span className={`ml-2 text-sm font-medium ${
                      isCompleted ? 'text-green-600' : 
                      isCurrent ? 'text-primary-600' : 
                      'text-gray-500'
                    }`}>
                      {step}
                    </span>
                    {index < 2 && (
                      <div className={`w-16 h-1 mx-4 ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Items</h2>
              <div className="space-y-4">
                {order.orderItems.map((item) => (
                  <div key={item._id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.image || '/placeholder-product.jpg'}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Quantity: {item.quantity} × ${item.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaMapMarkerAlt className="text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{order.shippingInfo?.address}</p>
                  <p>{order.shippingInfo?.city}, {order.shippingInfo?.state} {order.shippingInfo?.pinCode}</p>
                  <p>{order.shippingInfo?.country}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <FaPhone className="text-gray-400" />
                    <span>{order.shippingInfo?.phoneNo}</span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaCreditCard className="text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Payment Information</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Status:</span>
                    <span className={`font-medium ${
                      order.paymentInfo?.status === 'succeeded' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {order.paymentInfo?.status === 'succeeded' ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transaction ID:</span>
                    <span className="font-medium text-xs">{order.paymentInfo?.id}</span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${order.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax:</span>
                    <span className="font-medium">${(order.totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-800">Total:</span>
                      <span className="text-lg font-bold text-primary-600">
                        ${(order.totalPrice * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail; 