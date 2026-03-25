import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { featuresData, getIconComponent } from '../data/features';

const FeatureDetails = () => {
  const { id } = useParams();
  const feature = featuresData.find(f => f.id === id);

  if (!feature) {
    return <Navigate to="/features" replace />;
  }

  const Icon = getIconComponent(feature.icon);

  return (
    <div className="bg-white min-h-screen">
      {/* Feature Header */}
      <div className="bg-slate-50 pt-16 pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/features" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all features
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`h-16 w-16 ${feature.bgColor} ${feature.color} rounded-2xl flex items-center justify-center shadow-inner`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
                  Core Feature
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                {feature.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            <div className="flex flex-shrink-0">
              <a href="#try-it" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
                Try it now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Deep dive into {feature.title.toLowerCase()}</h2>
            <div className="prose prose-lg text-slate-600 prose-primary mb-10">
              <p>{feature.details}</p>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {[
                'Significantly reduces development overhead and time.',
                'Designed to scale seamlessly with your growing user base.',
                'Backed by our industry-leading 99.9% uptime SLA.',
                'Comprehensive documentation and developer support 24/7.'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className={`h-6 w-6 border-transparent ${feature.color}`} />
                  </div>
                  <p className="ml-3 text-lg text-slate-600">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group perspective-1000">
            {/* Decorative background for image */}
            <div className={`absolute -inset-4 opacity-50 blur-2xl rounded-3xl transition-all duration-500 group-hover:opacity-70 ${feature.color.replace('text-', 'bg-')}`}></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white bg-white transform transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="px-4 py-3 bg-slate-900 flex items-center space-x-2 border-b border-slate-700">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <img 
                src={feature.image} 
                alt={`${feature.title} demonstration`} 
                className="w-full h-auto aspect-video object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default FeatureDetails;
