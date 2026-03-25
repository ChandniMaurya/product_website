import { Link } from 'react-router-dom';
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-1.5 rounded-lg text-slate-900">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter text-white">
                Urbane<span className="text-primary-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Curated minimal everyday carry essentials and premium products designed for modern life.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/products" className="hover:text-primary-400 transition-colors">All Products</Link></li>
              <li><Link to="/products" className="hover:text-primary-400 transition-colors">New Arrivals</Link></li>
              <li><Link to="/products" className="hover:text-primary-400 transition-colors">Accessories</Link></li>
              <li><Link to="/products" className="hover:text-primary-400 transition-colors">Electronics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/help" className="hover:text-primary-400 transition-colors">Help Center</Link></li>
              <li><Link to="/track" className="hover:text-primary-400 transition-colors">Track Order</Link></li>
              <li><Link to="/returns" className="hover:text-primary-400 transition-colors">Returns & Exchanges</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Urbane Store. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Secured Checkout</span>
            {/* Payment icons placeholder */}
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-slate-800 rounded"></div>
              <div className="w-8 h-5 bg-slate-800 rounded"></div>
              <div className="w-8 h-5 bg-slate-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
