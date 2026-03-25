import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingCart } from 'lucide-react';
import { productsData } from '../data/products';

const Home = () => {
  const featuredProducts = productsData.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[80vh] flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary-600/30 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-primary-300 font-medium text-xs mb-8 uppercase tracking-widest border border-white/10 backdrop-blur-md">
              Fall Collection 2024
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
              Elevate your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
                everyday carry.
              </span>
            </h1>
            
            <p className="mt-4 text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              Discover premium, minimalist products designed to seamlessly integrate into your modern lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/products" className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="#trending" className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center">
                View Trending
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-full blur-3xl flex items-center justify-center"></div>
            <img 
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" 
              alt="Premium Smart Watch" 
              className="relative z-10 w-full max-w-lg mx-auto transform rotate-[-15deg] hover:rotate-0 transition-transform duration-700 hover:scale-105 filter drop-shadow-2xl rounded-3xl"
            />
          </div>
          
        </div>
      </section>

      {/* Categories Banner */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Electronics', 'Accessories', 'Wearables', 'Home'].map((cat, idx) => (
              <a href="#" key={idx} className="group relative h-40 rounded-2xl overflow-hidden flex items-center justify-center shadow-sm">
                <img 
                  src={`https://source.unsplash.com/800x600/?minimal,${cat.toLowerCase()}`} 
                  alt={cat}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:scale-110 group-hover:brightness-50 transition-all duration-700"
                />
                <span className="relative z-10 text-white font-bold text-xl tracking-wide">{cat}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section id="trending" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Trending Now</h2>
              <p className="mt-3 text-lg text-slate-500">Handpicked essentials loved by our community.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              View all products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
                <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10 bg-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      New
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <button className="bg-white/80 backdrop-blur-md p-2 rounded-full text-slate-400 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-full bg-white/90 backdrop-blur-sm text-slate-900 font-bold py-3 rounded-xl shadow-lg hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 mr-2" /> Quick Add
                    </button>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                    <span className="text-sm text-slate-400">({product.reviews})</span>
                  </div>
                  
                  <Link to={`/products/${product.id}`} className="text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors mb-1 line-clamp-1">
                    {product.name}
                  </Link>
                  <p className="text-sm text-slate-500 mb-4">{product.category}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-extrabold text-slate-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    {/* Color swatches */}
                    <div className="flex space-x-1">
                      {product.colors.slice(0,3).map((color, i) => (
                        <div key={i} className={`w-4 h-4 rounded-full ${color} border border-slate-200`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Promotion value props */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-6">
              <div className="h-12 w-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Free Global Delivery</h3>
              <p className="text-slate-400 text-sm">On all orders over $150.</p>
            </div>
            <div className="p-6">
              <div className="h-12 w-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">30-Day Free Returns</h3>
              <p className="text-slate-400 text-sm">Return it if you don't love it.</p>
            </div>
            <div className="p-6">
              <div className="h-12 w-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
              <p className="text-slate-400 text-sm">Your payment information is handled securely.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
