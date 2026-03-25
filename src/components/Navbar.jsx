import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, User, Search, Menu, LogOut, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary-600 font-semibold' : 'text-slate-600 hover:text-primary-600';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-slate-900 p-2 rounded-xl text-white">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900">
              Urbane<span className="text-primary-600">.</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-10 items-center">
            <Link to="/" className={`transition-colors duration-200 text-sm tracking-wide ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/products" className={`transition-colors duration-200 text-sm tracking-wide ${isActive('/products')}`}>
              Shop All
            </Link>
            <a href="#" className="text-slate-600 hover:text-primary-600 transition-colors duration-200 text-sm tracking-wide">
              Categories
            </a>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-5">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-500 hover:text-slate-900 transition-colors p-2"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm font-bold text-slate-900 hidden sm:block">Hi, {user?.name}</span>
                <button onClick={logout} className="text-slate-500 hover:text-red-600 transition-colors p-2" title="Logout">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-slate-500 hover:text-slate-900 transition-colors p-2 hidden sm:block" title="Login">
                <User className="h-5 w-5" />
              </Link>
            )}
            
            <Link to="/cart" className="text-slate-500 hover:text-slate-900 transition-colors p-2 relative group">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-[10px] font-bold text-white group-hover:scale-110 transition-transform">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <button className="text-slate-500 hover:text-slate-900 transition-colors p-2 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Search Overlay overlay */}
        {isSearchOpen && (
          <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-md flex items-center px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto flex items-center relative">
              <Search className="absolute left-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search for products..."
                className="w-full bg-white border-2 border-primary-500 rounded-full py-3 pl-12 pr-12 focus:outline-none focus:ring-4 focus:ring-primary-500/20 text-slate-900 text-lg shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 text-slate-400 hover:text-slate-900 p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
