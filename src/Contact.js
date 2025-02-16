import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Mail } from 'lucide-react';

function Contact() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
    improvement: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Here you would typically send the feedback to your server
    alert('Thank you for your feedback!');
  };

  return (
    <div className="pt-20">
      {/* Restaurant Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Visit NoodleHouse</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Restaurant Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-600" />
                  <p>123 Noodle Street, San Francisco, CA 94110</p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gray-600" />
                  <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-600" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-600" />
                  <p>info@noodlehouse.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${star <= 4.5 ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2">4.5 out of 5</span>
                </div>
                <p className="text-gray-600 italic">"Best ramen in the city! The broth is incredibly rich and flavorful."</p>
                <p className="text-gray-600 italic">"Amazing service and authentic taste. Will definitely come back!"</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95397604544!2d-122.43633985436654!3d37.75769714359726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085a4c48a67%3A0x385dce0e7f9c1b71!2sSan%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1709925433736!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Help Us Improve</h2>
          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  value={feedback.name}
                  onChange={(e) => setFeedback({...feedback, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md"
                  value={feedback.email}
                  onChange={(e) => setFeedback({...feedback, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">What can we improve?</label>
                <select
                  className="w-full px-4 py-2 border rounded-md"
                  value={feedback.improvement}
                  onChange={(e) => setFeedback({...feedback, improvement: e.target.value})}
                  required
                >
                  <option value="">Select an area</option>
                  <option value="food">Food Quality</option>
                  <option value="service">Service</option>
                  <option value="delivery">Delivery</option>
                  <option value="atmosphere">Restaurant Atmosphere</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md h-32"
                  value={feedback.message}
                  onChange={(e) => setFeedback({...feedback, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Rate your experience</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 cursor-pointer ${
                        star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 w-full transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;