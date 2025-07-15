import React from 'react';
import { ContactInfo, SocialLinks, ContactForm, ContactCTA } from '../index';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-neutral-950/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animate-slide-up">
            <span className="text-white">Get In </span>
            <span className="text-neutral-300">Touch</span>
          </h2>
          <p
            className="text-lg text-neutral-400 max-w-2xl mx-auto animate-fade-scale"
            style={{ animationDelay: '0.2s' }}
          >
            Ready to start your next project? Let&apos;s discuss how we can work
            together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className="space-y-8 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <ContactInfo />

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Additional CTA */}
        <ContactCTA />
      </div>
    </section>
  );
};

export default Contact;
