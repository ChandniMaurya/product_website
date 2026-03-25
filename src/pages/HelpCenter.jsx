import { useState } from 'react';
import { HelpCircle, Mail, MessageCircle, Phone, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the continental US. Expedited shipping is available at checkout for 1-2 day delivery. International shipping usually takes 7-14 business days depending on the destination."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day hassle-free return policy. If you aren't completely satisfied with your purchase, you can return it within 30 days of receipt for a full refund (excluding expedited shipping costs). Items must be in their original condition."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times are calculated at checkout based on your location. Please note that customs duties and taxes may apply upon arrival."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, you will receive a confirmation email with a tracking number. You can also use our 'Track Order' page directly to see real-time updates on your package's location."
    },
    {
      question: "Can I change or cancel my order?",
      answer: "If you need to change or cancel your order, please contact our support team immediately. We process orders quickly, but if your package hasn't been dispatched yet, we will happily accommodate your request."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center border-b-8 border-primary-600">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">How can we help you?</h1>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Search for answers or browse our categories below to find exactly what you need.
        </p>
        
        <div className="max-w-2xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search for articles, tracking info..." 
            className="w-full text-slate-900 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-primary-500 shadow-xl text-lg"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-primary-600 hover:bg-primary-700 text-white px-6 rounded-full font-bold transition-colors">
            Search
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="h-16 w-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Getting Started</h3>
            <p className="text-slate-500 text-sm">Guides on how to setup your new products.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="h-16 w-16 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">My Account</h3>
            <p className="text-slate-500 text-sm">Manage your profile, passwords, and billing details.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="h-16 w-16 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <RotateCcw className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Returns</h3>
            <p className="text-slate-500 text-sm">Process a return or exchange quickly online.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="h-16 w-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Shipping</h3>
            <p className="text-slate-500 text-sm">Delivery options, timelines, and locations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-slate-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-primary-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Us Card */}
          <div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 sticky top-28 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Still need help?</h2>
              <p className="text-slate-500 text-sm mb-6">Our support team is available 24/7 to assist you with any inquiries.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 p-3 rounded-xl text-primary-600">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-slate-900">Live Chat</h4>
                    <p className="text-sm text-slate-500 mb-2">Response time: ~2 minutes</p>
                    <button className="text-primary-600 font-semibold text-sm hover:underline">Start a chat</button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 p-3 rounded-xl text-primary-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-slate-900">Email Us</h4>
                    <p className="text-sm text-slate-500 mb-2">support@urbane.store</p>
                    <button className="text-primary-600 font-semibold text-sm hover:underline">Send an email</button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 p-3 rounded-xl text-primary-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-slate-900">Call Us</h4>
                    <p className="text-sm text-slate-500 mb-2">+1 (800) 123-4567</p>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Available Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
