import { useState } from 'react';
import { Truck, MapPin, Package, CheckCircle2, Search, PackageSearch } from 'lucide-react';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if(orderNumber && email) {
      setIsTracking(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="h-20 w-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <PackageSearch className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Track Your Order</h1>
          <p className="text-lg text-slate-500">
            Enter your order number and email address to get the latest delivery updates.
          </p>
        </div>

        {/* Tracking Form */}
        {!isTracking ? (
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-2xl mx-auto">
            <form onSubmit={handleTrackSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Order Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400">#</span>
                  </div>
                  <input 
                    type="text" 
                    required
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-lg transition-shadow" 
                    placeholder="12345678" 
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Find your order number in your confirmation email.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-lg transition-shadow" 
                  placeholder="you@example.com" 
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full flex justify-center items-center py-4 px-4 bg-slate-900 hover:bg-black text-white rounded-xl shadow-lg text-lg font-bold transition-all hover:-translate-y-1">
                  Track Package <Search className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          
          /* Tracking Status Details */
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="bg-slate-900 px-8 py-6 text-white flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Order #{orderNumber}</h2>
                <p className="text-slate-400 text-sm mt-1">Expected Delivery: <span className="text-white font-medium">October 24, 2024</span></p>
              </div>
              <div className="mt-4 md:mt-0 px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full font-bold text-sm flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></div>
                In Transit
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-lg font-bold text-slate-900 mb-10">Delivery Status</h3>
              
              {/* Timeline */}
              <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
                
                {/* Step 1: Placed */}
                <div className="relative z-10">
                  <div className="flex items-center">
                    <div className="absolute -left-[30px] md:-left-[34px] w-12 h-12 bg-white flex items-center justify-center">
                      <div className="h-10 w-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center ring-4 ring-white">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-10 md:ml-12">
                      <h4 className="text-base font-bold text-slate-900">Order Placed</h4>
                      <p className="text-slate-500 text-sm mt-1">October 19, 2024 - 10:45 AM</p>
                      <p className="text-slate-600 text-sm mt-2">We have received your order and payment.</p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Packed */}
                <div className="relative z-10">
                  <div className="flex items-center">
                    <div className="absolute -left-[30px] md:-left-[34px] w-12 h-12 bg-white flex items-center justify-center">
                      <div className="h-10 w-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center ring-4 ring-white">
                        <Package className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-10 md:ml-12">
                      <h4 className="text-base font-bold text-slate-900">Order Packed</h4>
                      <p className="text-slate-500 text-sm mt-1">October 20, 2024 - 09:12 AM</p>
                      <p className="text-slate-600 text-sm mt-2">Your items have been carefully packed in our facility.</p>
                    </div>
                  </div>
                </div>

                {/* Step 3: In Transit (Current) */}
                <div className="relative z-10">
                  <div className="flex items-center">
                    <div className="absolute -left-[30px] md:-left-[34px] w-12 h-12 bg-white flex items-center justify-center">
                      <div className="h-10 w-10 bg-primary-600 text-white rounded-full flex items-center justify-center ring-4 ring-white shadow-lg">
                        <Truck className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-10 md:ml-12">
                      <h4 className="text-base font-bold text-primary-600">In Transit</h4>
                      <p className="text-slate-500 text-sm mt-1">October 21, 2024 - 03:30 PM</p>
                      <p className="text-slate-600 text-sm mt-2">The package has departed the sorting facility in Los Angeles, CA.</p>
                    </div>
                  </div>
                </div>

                {/* Step 4: Delivered (Pending) */}
                <div className="relative z-10 opacity-40">
                  <div className="flex items-center">
                    <div className="absolute -left-[30px] md:-left-[34px] w-12 h-12 bg-white flex items-center justify-center">
                      <div className="h-10 w-10 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center ring-4 ring-white border border-slate-300">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-10 md:ml-12">
                      <h4 className="text-base font-bold text-slate-900">Out for Delivery</h4>
                      <p className="text-slate-500 text-sm mt-1">Pending</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-center">
               <button 
                onClick={() => setIsTracking(false)}
                className="text-slate-500 hover:text-slate-900 font-medium transition-colors"
               >
                 Track another order
               </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TrackOrder;
