import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, Star, ShoppingCart, SearchX } from 'lucide-react';
import { productsData, categories } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  
  // Set category to All if searching
  useEffect(() => {
    if (searchQuery) {
      setActiveCategory('All');
    }
  }, [searchQuery]);

  let filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop Everything'}
          </h1>
          <p className="text-lg text-slate-500">
            {searchQuery 
              ? `Found ${filteredProducts.length} products matching your search.` 
              : 'A curated collection of exceptional products designed to elevate your everyday experience.'}
          </p>
        </div>

        {/* Filters and Categories */}
        {!searchQuery && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-slate-200">
            <div className="flex overflow-x-auto space-x-2 pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === cat 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex space-x-4 w-full md:w-auto mt-4 md:mt-0 justify-end">
              <button className="flex items-center text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors">
                <Filter className="h-4 w-4 mr-2" /> Filters
              </button>
              <button className="flex items-center text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors">
                Sort by: Recommended <ChevronDown className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/products/${product.id}`} className="block relative aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden mb-5 border border-slate-200/50">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      New Arrival
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button onClick={(e) => {
                      e.preventDefault();
                      // Redirect to product details for color selection
                      window.location.href = `/products/${product.id}`;
                    }} className="w-full bg-slate-900/90 backdrop-blur-md text-white font-bold py-3.5 rounded-2xl shadow-xl hover:bg-primary-600 transition-colors flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 mr-2" /> View Details
                    </button>
                  </div>
                </Link>
                
                <div>
                  <div className="flex items-center space-x-1 mb-1.5">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                    <span className="text-sm text-slate-400">({product.reviews})</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-1 mb-1">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </h3>
                  
                  <p className="text-sm text-slate-500 mb-2">{product.category}</p>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-extrabold text-slate-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
           <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
             <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
               <SearchX className="h-10 w-10 text-slate-400" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
             <p className="text-slate-500 max-w-sm mx-auto mb-8">
               We couldn't find any products matching your search "{searchQuery}". Try different keywords or browse our categories.
             </p>
             <Link to="/products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-full shadow-sm text-white bg-slate-900 hover:bg-black">
               Browse All Products
             </Link>
           </div>
        )}
        
      </div>
    </div>
  );
};

export default Products;
