import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      title: 'Email',
      value: '1002sanketpatil@gmail.com',
      link: 'mailto:1002sanketpatil@gmail.com'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/Sanket_Patil',
      link: 'https://www.linkedin.com/in/sanket-patil-56938831a/'
    },
    {
      title: 'GitHub',
      value: 'github.com/SanketPatil',
      link: 'https://github.com/SanketP2003'
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto">
            <span className="text-black text-3xl">✓</span>
          </div>
          <h1 className="text-4xl font-black text-white">Message Sent!</h1>
          <p className="text-xl text-zinc-300">Thank you for reaching out. I'll get back to you soon.</p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Touch</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="text-zinc-300 leading-relaxed mb-8">
                  Whether you have a project idea, want to collaborate, or just want to say hello,
                  I'm always excited to connect with fellow developers and creators.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900/70 rounded-2xl p-6 border border-zinc-800 hover:border-yellow-400/50 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                      <span className="text-black font-bold">{method.title[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{method.title}</h3>
                      <p className="text-zinc-400 text-sm">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:scale-105 transform transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
