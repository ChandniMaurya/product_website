import { useEffect } from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { Printer, CheckCircle2, Download, ArrowLeft } from 'lucide-react';

const Invoice = () => {
  const { state } = useLocation();
  const orderData = state?.orderData;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!orderData) {
    return <Navigate to="/" replace />;
  }

  const { items, total, date, orderId, user } = orderData;
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Header (Hidden in Print) */}
        <div className="text-center mb-10 print:hidden">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-6">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Order Confirmed!</h1>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
            Thank you for your purchase. We've received your order and are getting it ready to be shipped.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={handlePrint}
              className="inline-flex items-center justify-center py-3 px-6 border border-transparent text-base font-bold rounded-full text-white bg-slate-900 hover:bg-black transition-colors shadow-sm"
            >
              <Download className="mr-2 h-5 w-5" /> Download / Print Invoice
            </button>
            <Link 
              to="/products"
              className="inline-flex items-center justify-center py-3 px-6 border border-slate-300 text-base font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Printable Invoice Document */}
        <div className="bg-white p-8 md:p-12 shadow-xl shadow-slate-200/50 sm:rounded-3xl border border-slate-100 print:shadow-none print:border-none print:p-0">
          
          {/* Invoice Header */}
          <div className="flex flex-col md:flex-row justify-between border-b border-slate-200 pb-8 mb-8">
            <div>
              <span className="font-extrabold text-3xl tracking-tighter text-slate-900">
                Urbane<span className="text-primary-600">.</span>
              </span>
              <p className="text-slate-500 mt-2 text-sm">123 Commerce Avenue<br/>Suite 400<br/>San Francisco, CA 94103</p>
            </div>
            <div className="mt-6 md:mt-0 md:text-right">
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest text-slate-300">Invoice</h2>
              <p className="font-medium text-slate-900 mt-2">Order #{orderId}</p>
              <p className="text-slate-500 text-sm">Date: {date}</p>
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Billed To</p>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{user?.name || 'Guest User'}</h3>
              <p className="text-slate-500 text-sm">{user?.email || 'customer@example.com'}</p>
              <p className="text-slate-500 text-sm mt-1">456 Main Street<br/>Apartment 4B<br/>New York, NY 10001</p>
            </div>
            <div className="sm:text-right">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Payment Method</p>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Visa ending in ****4242</h3>
              <p className="text-slate-500 text-sm">Paid successfully</p>
            </div>
          </div>

          {/* Items Table */}
          <div className="overflow-hidden border border-slate-200 rounded-xl mb-8">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Item Details</th>
                  <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Qty</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {items.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-0">
                          <div className="text-sm font-bold text-slate-900">{item.name}</div>
                          <div className="text-sm text-slate-500">{item.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 text-center">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 text-right">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end pt-4">
            <div className="w-full sm:w-1/2 lg:w-1/3 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Shipping</span>
                <span className="font-medium text-slate-900">Free</span>
              </div>
              <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                <span className="text-slate-500">Tax (8%)</span>
                <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-base font-bold text-slate-900">Total</span>
                <span className="text-2xl font-extrabold text-primary-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            <p className="font-bold text-slate-900 mb-1">Thank you for shopping with Urbane</p>
            <p>If you have any questions about your invoice, please contact our support team at support@urbane.store.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Invoice;
