import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { featuresData, getIconComponent } from '../data/features';

const FeaturesList = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            All Features
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Explore the comprehensive suite of tools and capabilities designed to supercharge your workflow and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => {
            const Icon = getIconComponent(feature.icon);
            return (
              <div 
                key={feature.id} 
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`h-16 w-16 ${feature.bgColor} ${feature.color} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <ArrowRight className="h-5 w-5 text-slate-400" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed">{feature.description}</p>
                
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <Link 
                    to={`/features/${feature.id}`} 
                    className="flex justify-between items-center w-full text-sm font-semibold text-slate-900 group-hover:text-primary-600 transition-colors"
                  >
                    <span>Explore details</span>
                    <span className="w-8 h-px bg-slate-200 group-hover:bg-primary-600 transition-colors duration-300 relative overflow-hidden">
                      <span className="absolute inset-0 bg-primary-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-primary-600 to-blue-700 rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 relative z-10">Don't see what you need?</h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8 relative z-10">
            Our engineering team is constantly adding new features. Let us know what you'd like to see next on our roadmap.
          </p>
          <a href="#" className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-primary-700 bg-white hover:bg-slate-50 transition-colors shadow-lg relative z-10">
            Request a Feature
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default FeaturesList;
