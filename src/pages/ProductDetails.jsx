import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingBag, Truck, RotateCcw, Shield, Check, Minus, Plus, UserCircle } from 'lucide-react';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  
  // Reviews State
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [mockReviews, setMockReviews] = useState([
    { id: 1, author: 'Alex Johnson', rating: 5, date: 'October 12, 2023', text: 'Absolutely love this product! The quality exceeded my expectations and delivery was surprisingly fast. Highly recommend to everyone.', verified: true },
    { id: 2, author: 'Samantha Lee', rating: 4, date: 'September 28, 2023', text: 'Really good overall. The build quality feels premium. Taking one star off because the packaging was slightly dented, but the item itself is flawless.', verified: true },
    { id: 3, author: 'Michael Chen', rating: 5, date: 'August 14, 2023', text: 'I\'ve been using this daily for about a month now and it hasn\'t let me down once. Worth every penny. It integrates perfectly into my setup.', verified: false },
  ]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const submitReview = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("Please login first to submit a review.");
      return;
    }
    if (reviewText.trim() === '') return;
    
    const newReview = {
      id: Date.now(),
      author: user?.name || 'Anonymous User',
      rating: reviewRating,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      text: reviewText,
      verified: true
    };
    
    setMockReviews([newReview, ...mockReviews]);
    setReviewText('');
    setReviewRating(5);
    setShowReviewForm(false);
  };

  return (
    <div className="bg-white min-h-screen py-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm font-medium text-slate-500 mb-10">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-slate-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Images Section */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/5] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Details Section */}
          <div className="flex flex-col pt-4">
            {product.isNew && (
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full self-start mb-6">
                New Arrival
              </span>
            )}
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-700">{product.rating} Rating</span>
              <a href="#reviews" className="text-sm text-slate-500 hover:text-primary-600 underline">Read {product.reviews} reviews</a>
            </div>
            
            <div className="flex items-end space-x-3 mb-8">
              <span className="text-4xl font-extrabold text-slate-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-slate-400 line-through mb-1">${product.originalPrice}</span>
              )}
            </div>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed border-b border-slate-200 pb-10">
              {product.description}
            </p>
            
            {/* Options */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === idx ? 'border-primary-600 p-1 scale-110 shadow-md' : 'border-transparent hover:scale-110'}`}
                  >
                    <span className={`w-full h-full rounded-full ${color} border border-slate-200`}></span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Quantity</h3>
              <div className="flex items-center border border-slate-200 rounded-full w-32 bg-white shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="flex-1 text-center font-bold text-slate-900 select-none">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className={`flex-1 py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg ${
                  isAdded 
                    ? 'bg-emerald-500 text-white shadow-emerald-500/30' 
                    : 'bg-slate-900 hover:bg-black text-white shadow-slate-900/20 hover:shadow-slate-900/40 transform hover:-translate-y-1'
                }`}
              >
                {isAdded ? (
                  <><Check className="mr-2 h-6 w-6" /> Added to Cart</>
                ) : (
                  <><ShoppingBag className="mr-2 h-6 w-6" /> Add to Cart — ${(product.price * quantity).toFixed(2)}</>
                )}
              </button>
            </div>
            
            {/* Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-slate-100">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <Truck className="h-6 w-6 text-primary-600 mb-2" />
                <span className="text-sm font-bold text-slate-900 mb-1">Free Shipping</span>
                <span className="text-xs text-slate-500">2-4 business days</span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <RotateCcw className="h-6 w-6 text-primary-600 mb-2" />
                <span className="text-sm font-bold text-slate-900 mb-1">Easy Returns</span>
                <span className="text-xs text-slate-500">Free 30-day window</span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <Shield className="h-6 w-6 text-primary-600 mb-2" />
                <span className="text-sm font-bold text-slate-900 mb-1">2 Year Warranty</span>
                <span className="text-xs text-slate-500">Full coverage</span>
              </div>
            </div>

            {/* Accordion / Details */}
            <div className="mt-10">
              <div className="border-b border-slate-200 pb-4 mb-4">
                <h3 className="text-lg font-bold text-slate-900">Product Details </h3>
                <div className="mt-4 text-slate-600 text-base leading-relaxed">
                  <p>{product.details}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="mt-20 border-t border-slate-200 pt-16">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Reviews Summary Info */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Customer Reviews</h2>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-6 w-6 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} />
                  ))}
                </div>
                <span className="text-2xl font-bold text-slate-900">{product.rating}</span>
                <span className="text-slate-500">out of 5</span>
              </div>
              <p className="text-slate-600 mb-8">Based on {product.reviews} global ratings</p>
              
              <div className="space-y-3 mb-10">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <span className="w-12 text-sm font-medium text-slate-600">{rating} star</span>
                    <div className="flex-1 mx-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-400 rounded-full" 
                        style={{ width: `${rating === 5 ? 75 : rating === 4 ? 15 : rating === 3 ? 5 : rating === 2 ? 3 : 2}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-sm text-slate-500 text-right">
                      {rating === 5 ? '75%' : rating === 4 ? '15%' : rating === 3 ? '5%' : rating === 2 ? '3%' : '2%'}
                    </span>
                  </div>
                ))}
              </div>
              
              {!showReviewForm ? (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Share your thoughts</h3>
                  <p className="text-slate-600 text-sm mb-6">If you’ve used this product, share your thoughts with other customers</p>
                  <button 
                    onClick={() => {
                      if(!isAuthenticated) {
                         alert("Please login first to write a review!");
                      } else {
                         setShowReviewForm(true);
                      }
                    }}
                    className="w-full py-3 px-4 border-2 border-slate-900 rounded-xl font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    Write a Review
                  </button>
                </div>
              ) : (
                <form onSubmit={submitReview} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Write your review</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Overall Rating</label>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                          key={star} 
                          type="button" 
                          onClick={() => setReviewRating(star)}
                          className="focus:outline-none"
                        >
                          <Star className={`h-8 w-8 ${star <= reviewRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Add a written review</label>
                    <textarea 
                      required
                      rows="4" 
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="What did you like or dislike?"
                      className="w-full rounded-xl border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-3 border resize-none"
                    ></textarea>
                  </div>
                  <div className="flex gap-3">
                    <button type="submit" className="flex-1 bg-slate-900 text-white font-bold py-2 px-4 rounded-xl hover:bg-black transition-colors">
                      Submit
                    </button>
                    <button type="button" onClick={() => setShowReviewForm(false)} className="px-4 py-2 border border-slate-300 rounded-xl text-slate-700 font-bold hover:bg-slate-100 transition-colors">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Reviews List */}
            <div className="lg:w-2/3">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                Top Reviews
              </h3>
              
              <div className="space-y-8">
                {mockReviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
                        <UserCircle className="h-8 w-8 text-slate-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-900">{review.author}</span>
                        <span className="text-sm text-slate-500">{review.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} />
                          ))}
                        </div>
                        {review.verified && (
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        "{review.text}"
                      </p>
                      <div className="mt-4 flex items-center space-x-4">
                        <button className="text-xs font-semibold text-slate-500 hover:text-primary-600 transition-colors">Helpful</button>
                        <button className="text-xs font-semibold text-slate-500 hover:text-primary-600 transition-colors">Report</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 border-2 border-slate-200 py-3 px-6 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors w-full sm:w-auto">
                Load More Reviews
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;
