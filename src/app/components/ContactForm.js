'use client';
// Add motion import at the top
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactForm({
  showTitle = true,
  compact = false,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [touched, setTouched] = useState({});

  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return '';

      case 'phone':
        if (value.trim() && !/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
          return 'Please enter a valid 10-digit phone number';
        }
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';

      default:
        return '';
    }
  }, []);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    const error = validateField(name, formData[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [formData, validateField]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTouched({});

        // Auto hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ label, name, type = 'text', icon: Icon, placeholder, required = false }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {errors[name] && touched[name] && (
          <span className="text-xs text-red-600 flex items-center">
            <FaExclamationCircle className="mr-1 text-xs" />
            {errors[name]}
          </span>
        )}
      </div>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`
            w-full pl-10 pr-4 py-3 rounded-lg border
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            ${errors[name] && touched[name]
              ? 'border-red-300 bg-red-50 text-red-900'
              : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'
            }
            ${compact ? 'text-sm py-2' : ''}
          `}
          required={required}
        />
      </div>
    </div>
  );

  return (
    <div className={`${compact ? 'w-full' : 'max-w-2xl mx-auto'} bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100`}>
      {showTitle && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <FaPaperPlane className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <p className="text-blue-100 text-sm mt-1">
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      )}

      <div className={`${compact ? 'p-5' : 'p-6 md:p-8'}`}>
        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
                <p className="text-green-600">We'll get back to you soon. Thank you!</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <FaExclamationCircle className="h-5 w-5 text-red-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-red-800">Something went wrong</h3>
                <p className="text-red-600">Please try again or contact us directly.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className={`${compact ? 'space-y-4' : 'space-y-5'}`}>
            {/* Two-column layout for name and email on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                name="name"
                icon={FaUser}
                placeholder="John Doe"
                required
                compact={compact}
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                icon={FaEnvelope}
                placeholder="john@example.com"
                required
                compact={compact}
              />
            </div>

            {/* Phone Field */}
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              icon={FaPhone}
              placeholder="(123) 456-7890"
              required={false}
              compact={compact}
            />

            {/* Message Field */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <div className="flex items-center space-x-2">
                  {errors.message && touched.message && (
                    <span className="text-xs text-red-600 flex items-center">
                      <FaExclamationCircle className="mr-1 text-xs" />
                      {errors.message}
                    </span>
                  )}
                  <span className={`text-xs ${formData.message.length >= 10 ? 'text-green-600' : 'text-gray-500'}`}>
                    {formData.message.length}/10
                  </span>
                </div>
              </div>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your requirements..."
                  rows={compact ? 4 : 5}
                  className={`
                    w-full pl-10 pr-4 py-3 rounded-lg border
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-all duration-200 resize-none
                    ${errors.message && touched.message
                      ? 'border-red-300 bg-red-50 text-red-900'
                      : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'
                    }
                    ${compact ? 'text-sm' : ''}
                  `}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full flex items-center justify-center py-3.5 px-6 
                  rounded-xl font-medium text-white
                  bg-gradient-to-r from-blue-600 to-blue-700 
                  hover:from-blue-700 hover:to-blue-800
                  focus:outline-none focus:ring-4 focus:ring-blue-500/30
                  transition-all duration-200 transform hover:-translate-y-0.5
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                  shadow-lg hover:shadow-xl
                  ${compact ? 'py-2.5 text-sm' : ''}
                `}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2 h-4 w-4" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-center pt-4 border-t border-gray-100">
              Your information is secure. We respect your privacy and never share your data.
            </p>
          </div>
        </form>

        {/* Alternative Contact Info - Only show in non-compact mode */}
        {!compact && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Other ways to reach us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaPhone className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-800 font-medium">Call Us</p>
                  <p className="text-gray-900 font-semibold">+91 98791 10368</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-green-800 font-medium">Email Us</p>
                  <p className="text-gray-900 font-semibold">contact@unicoat.com</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps?q=Unicoat+Abrasives+industries"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-purple-800 font-medium">Visit Us</p>
                  <p className="text-gray-900 font-semibold">Ahmedabad, India</p>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

