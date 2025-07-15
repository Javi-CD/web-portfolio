import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);

    // You can add actual form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <div className="glass-card p-8 rounded-xl">
        <h3 className="text-xl font-medium text-white mb-6">Send Message</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-800/30 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-500 focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600/50 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-800/30 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-500 focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600/50 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-neutral-300 mb-2"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-neutral-800/30 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-500 focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600/50 transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-300 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-neutral-800/30 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-500 focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600/50 transition-colors resize-none"
              placeholder="Tell me about your project or just say hello!"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn-primary flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
