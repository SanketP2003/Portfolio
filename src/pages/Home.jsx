import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-lg transform rotate-12"></div>
        </div>
      </div>
      <h3 className="text-lg font-bold text-zinc-900 mb-2">{title}</h3>
      <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Home() {
  return (
    <main className="text-zinc-100 font-sans">
      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">
              Unparalleled <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Craftsmanship</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Discover the fusion of modern web design and software engineering excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Precision Engineering"
              description="Meticulous attention to detail that elevates every interface."
            />
            <FeatureCard
              title="Performance Optimization"
              description="Lightning-fast, resilient applications optimized for scalability."
            />
            <FeatureCard
              title="Modern Aesthetics"
              description="Contemporary design that captivates users without compromising functionality."
            />
            <FeatureCard
              title="Technical Excellence"
              description="Robust implementations grounded in modern best practices."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
