import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Pass redirection state
      navigate('/login', { state: { from: { pathname: '/cart' } } });
    } else {
      // Generate order data
      const orderData = {
        orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        items: cartItems,
        total: cartTotal * 1.08,
      };
      
      clearCart();
      // Redirect to invoice
      navigate('/invoice', { state: { orderData } });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] bg-slate-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 rounded-3xl shadow-sm text-center max-w-lg w-full border border-slate-100">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-slate-100 mb-6">
            <svg className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Your cart is empty</h2>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">Looks like you haven't added anything to your cart yet. Let's fix that!</p>
          <Link to="/products" className="inline-flex justify-center py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-slate-900 hover:bg-black transition-colors">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Shopping Bag</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow-sm rounded-3xl border border-slate-100 overflow-hidden divide-y divide-slate-100">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.selectedColor}-${index}`} className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
                          <Link to={`/products/${item.id}`} className="hover:text-primary-600">{item.name}</Link>
                        </h3>
                        <p className="text-lg font-bold text-slate-900 ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">{item.category}</p>
                      
                      {item.selectedColor !== null && (
                         <div className="flex items-center space-x-2 mt-2">
                           <span className="text-sm text-slate-500">Color Variant: </span>
                           <span className={`w-4 h-4 rounded-full ${item.colors[item.selectedColor]} border border-slate-200`}></span>
                         </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                          className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-bold text-sm text-slate-900">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                          className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedColor)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-2 flex items-center text-sm font-medium"
                      >
                        <Trash2 className="h-4 w-4 mr-1.5" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white shadow-sm rounded-3xl border border-slate-100 p-8 sticky top-28">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6 border-b border-slate-100 pb-6">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Shipping Estimate</span>
                  <span className="font-medium text-slate-900">Free</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Tax Estimate</span>
                  <span className="font-medium text-slate-900">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-8">
                <span className="text-base font-bold text-slate-900">Order Total</span>
                <span className="text-3xl font-extrabold text-slate-900">${(cartTotal * 1.08).toFixed(2)}</span>
              </div>
              
              <button 
                onClick={handleCheckout}
                className="w-full flex justify-center py-4 px-8 border border-transparent rounded-2xl shadow-lg text-base font-bold text-white bg-slate-900 hover:bg-black transition-all hover:-translate-y-1 mb-6 focus:ring-4 focus:ring-slate-200"
              >
                Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              {/* Trust markers */}
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-center text-slate-500 text-sm">
                  <ShieldCheck className="h-5 w-5 mr-2 text-emerald-500" /> Secure Checkout
                </div>
                <div className="flex justify-center space-x-2">
                  <CreditCard className="h-6 w-8 text-slate-400" />
                  <div className="h-6 w-8 bg-slate-200 rounded text-[10px] flex items-center justify-center font-bold text-slate-500">PAY</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
