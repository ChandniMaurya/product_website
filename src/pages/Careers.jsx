import React from 'react';
import { ArrowRight, Star, Briefcase, MapPin, Code, Palette, Megaphone, Boxes } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      role: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote, US',
      type: 'Full-time',
      icon: <Code className="h-6 w-6 text-blue-600" />,
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      role: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      bg: 'bg-purple-50'
    },
    {
      id: 3,
      role: 'Growth Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      icon: <Megaphone className="h-6 w-6 text-rose-600" />,
      bg: 'bg-rose-50'
    },
    {
      id: 4,
      role: 'Supply Chain Operations Coordinator',
      department: 'Operations',
      location: 'Austin, TX',
      type: 'Full-time',
      icon: <Boxes className="h-6 w-6 text-emerald-600" />,
      bg: 'bg-emerald-50'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-40 px-4 text-center relative overflow-hidden text-white border-b-[16px] border-primary-600">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Help us build the <br/> future of e-commerce.
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Join a passionate team of creators, engineers, and problem solvers working to elevate the everyday shopping experience.
        </p>
        <a href="#open-roles" className="inline-flex items-center justify-center py-4 px-8 border border-transparent text-base font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-xl">
          View Open Roles <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-24 relative z-10">
        
        {/* Perks Grid */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-10 md:p-16 border border-slate-100 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Why work at Urbane?</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">We offer top-tier benefits and a culture that prioritizes autonomy, creativity, and work-life balance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><Star className="h-5 w-5" /></div>
                <h3 className="text-lg font-bold text-slate-900">Health & Wellness</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">Comprehensive medical, dental, and vision coverage for you and your dependents, plus a monthly mental health wellness stipend.</p>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Briefcase className="h-5 w-5" /></div>
                <h3 className="text-lg font-bold text-slate-900">Flexible Work</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">Work from wherever you're most productive. We operate on a flexible hybrid model with beautiful hub offices available.</p>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-amber-100 text-amber-600 p-2 rounded-lg"><MapPin className="h-5 w-5" /></div>
                <h3 className="text-lg font-bold text-slate-900">Generous Time Off</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">Take the time you need to recharge with our unlimited PTO policy, plus 14 paid company holidays and a winter break.</p>
            </div>
          </div>
        </div>

        {/* Roles List */}
        <div id="open-roles" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Open Positions</h2>
              <p className="text-slate-500 mt-2">Find your next big opportunity.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-sm font-semibold text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-full">
                {openPositions.length} roles available
              </span>
            </div>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((job) => (
              <a href="#" key={job.id} className="group block bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-primary-500 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex items-center">
                    <div className={`${job.bg} p-4 rounded-2xl hidden sm:block`}>
                      {job.icon}
                    </div>
                    <div className="sm:ml-6">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm font-medium text-slate-500">
                        <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1.5" /> {job.department}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center"><MapPin className="h-4 w-4 mr-1.5" /> {job.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-0 self-start sm:self-center">
                    <button className="flex items-center justify-center bg-slate-100 group-hover:bg-slate-900 text-slate-700 group-hover:text-white font-bold h-12 w-12 rounded-full transition-colors duration-300">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Don't see a fit?</h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">We're always looking for talented people. Send us your resume and tell us how you can contribute to our mission.</p>
            <button className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-black transition-colors">
              Submit General Application
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;
