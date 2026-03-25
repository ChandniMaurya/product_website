import { useState } from 'react';
import { ArrowRightLeft, RefreshCw, Box, ShieldCheck, Mail, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Returns = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleReturnSubmit = (e) => {
    e.preventDefault();
    if(orderNumber && email) {
      setIsProcessing(true);
      // Simulate API call
      setTimeout(() => {
        setIsProcessing(false);
        setSuccess(true);
      }, 1500);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <div className="bg-slate-900 border-b-[16px] border-primary-600 pb-24 pt-20 px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-slate-800 p-4 rounded-3xl text-primary-500 shadow-xl">
            <ArrowRightLeft className="h-12 w-12" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Returns & Exchanges</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          We want you to love your purchase. If you don't, returning or exchanging it is entirely free and incredibly easy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Action Area */}
          <div className="lg:col-span-7">
            
            {!success ? (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Start a Return or Exchange</h2>
                <p className="text-slate-500 mb-8">Enter your order details below to lookup your items and generate a prepaid shipping label.</p>
                
                <form onSubmit={handleReturnSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Order Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-400 font-medium">U-</span>
                      </div>
                      <input 
                        type="text" 
                        required
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        className="w-full pl-10 pr-4 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-shadow" 
                        placeholder="12345678" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg transition-shadow" 
                      placeholder="Email used for the order" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className={`w-full py-4 px-4 rounded-xl text-lg font-bold text-white shadow-lg transition-all ${
                      isProcessing ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-black hover:-translate-y-1'
                    }`}
                  >
                    {isProcessing ? 'Looking up order...' : 'Find My Order'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-emerald-100 text-center">
                <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Order U-{orderNumber} Found!</h2>
                <p className="text-slate-600 mb-8 max-w-sm mx-auto">We've sent an email to <strong>{email}</strong> with a secure link to select your items and print your prepaid return label.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setSuccess(false)} className="px-6 py-3 border border-slate-300 rounded-full font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                    Look up another order
                  </button>
                  <Link to="/" className="px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-black transition-colors">
                    Return to Store
                  </Link>
                </div>
              </div>
            )}
            
          </div>

          {/* Guidelines sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Our Policy at a Glance</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-lg text-primary-600 mr-4 mt-1"><RefreshCw className="h-5 w-5" /></div>
                  <div>
                    <span className="block font-bold text-slate-900 mb-1">30-Day Window</span>
                    <span className="text-sm text-slate-600 leading-relaxed block">You have 30 days from the delivery date to return or exchange eligible items.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600 mr-4 mt-1"><Box className="h-5 w-5" /></div>
                  <div>
                    <span className="block font-bold text-slate-900 mb-1">Original Condition</span>
                    <span className="text-sm text-slate-600 leading-relaxed block">Items must be unworn, unwashed, unused, and in their original packaging.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mr-4 mt-1"><Printer className="h-5 w-5" /></div>
                  <div>
                    <span className="block font-bold text-slate-900 mb-1">Free Return Shipping</span>
                    <span className="text-sm text-slate-600 leading-relaxed block">Use our pre-paid label. A flat $5 restocking fee is deducted from refunds (exchanges are strictly free).</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 bg-slate-800 rounded-full h-32 w-32 opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <Mail className="h-8 w-8 text-primary-400 mb-4" />
                <h3 className="font-bold text-xl mb-2">Need human assistance?</h3>
                <p className="text-slate-400 text-sm mb-6">If your return is complex or past the 30-day window, reach out directly to our team.</p>
                <Link to="/help" className="inline-block px-5 py-2.5 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors text-sm">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Returns;
