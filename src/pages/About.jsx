import React from 'react';
import { Target, Heart, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 mt-10">
          Redefining Everyday <span className="text-primary-500">Essentials</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We believe that the products you use every day should be beautiful, functional, and built to last. Welcome to Urbane.
        </p>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Story</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2023, Urbane started with a simple question: Why do we settle for mediocre products in our daily lives? We set out to create a marketplace that curates only the finest minimalist designs and high-quality materials.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we serve thousands of customers worldwide, providing them with essential everyday carry items, premium electronics, and modern home accessories that elevate their daily routines.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000" alt="Team working" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Creative meeting" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="aspect-[3/4] bg-primary-100 rounded-3xl overflow-hidden shadow-md mt-10">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Office space" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-slate-200 pb-20 mb-20">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Core Values</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-16">The principles that guide everything we do.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            <div>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Intentional Design</h3>
              <p className="text-slate-600">Every product is carefully selected for its aesthetic and functional purpose. No clutter, just utility.</p>
            </div>
            
            <div>
              <div className="h-12 w-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer First</h3>
              <p className="text-slate-600">Your experience is our top priority. From browsing to unboxing, we strive for perfection.</p>
            </div>
            
            <div>
              <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Uncompromising Quality</h3>
              <p className="text-slate-600">We partner exclusively with brands and manufacturers that share our commitment to durability.</p>
            </div>
            
            <div>
              <div className="h-12 w-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sustainable Future</h3>
              <p className="text-slate-600">We balance our rapid growth with eco-friendly shipping practices and carbon offsetting.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">50k+</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">100+</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Curated Brands</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">4.9</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">24/7</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
