import React, { useState } from 'react';

const CONTACT_INFO = [
  { title: 'Email', value: 'sanket.patil@example.com', link: 'mailto:sanket.patil@example.com' },
  { title: 'LinkedIn', value: 'linkedin.com/in/sanketpatil', link: 'https://linkedin.com/in/sanketpatil' },
  { title: 'GitHub', value: 'github.com/sanketpatil', link: 'https://github.com/sanketpatil' },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 2200); };

  return (
    <section id="contact" className="section">
      <div className="container-base space-y-12">
        <div className="text-center space-y-4 fade-in">
          <h2 className="section-title">Say <span className="gradient-text">Hello</span></h2>
          <p className="text-lead">Want to build something or just talk about uni / code? Send a note.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 fade-in">
            <h3 className="text-xl font-semibold text-white">Quick Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">Name</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} required className="input-base" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">Email</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className="input-base" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">Message</label>
                <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required className="textarea-base" placeholder="What’s up?" />
              </div>
              <button type="submit" className="w-full btn-primary hover-pop">{submitted ? 'Sent!' : 'Send'}</button>
            </form>
          </div>
          <div className="space-y-8 fade-in">
            <h3 className="text-xl font-semibold text-white">Elsewhere</h3>
            <div className="space-y-3">
              {CONTACT_INFO.map(info => (
                <a key={info.title} href={info.link} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 hover:bg-black/80 hover-pop">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-black/60 text-gray-300 text-sm font-medium">{info.title[0]}</div>
                  <div>
                    <p className="text-sm text-white font-medium">{info.title}</p>
                    <p className="text-xs text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="card space-y-2 text-sm text-gray-300">
              <p className="font-medium text-white">Reply Time</p>
              <p>Usually same day. If not, probably deep in a bug.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
