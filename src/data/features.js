import { Layers, Zap, Shield, Smartphone, Globe, Code } from 'lucide-react';

export const featuresData = [
  {
    id: 'performance',
    title: 'Lightning Fast Performance',
    description: 'Experience blazing fast load times and smooth interactions powered by the latest web technologies.',
    icon: 'Zap',
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
    details: 'Our platform is meticulously optimized for speed. Using advanced caching strategies, code splitting, and edge network delivery, we ensure your users never have to wait. Enjoy sub-second page loads and ultra-responsive interfaces.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'security',
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected by industry-leading security protocols and robust encryption standards.',
    icon: 'Shield',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-100',
    details: 'We take security seriously. With end-to-end encryption, regular security audits, and compliance with major data protection regulations, you can trust us with your most sensitive information. Our automated threat detection operates 24/7.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'responsive',
    title: 'Fully Responsive Design',
    description: 'Flawless experience across all devices, from large desktop monitors to mobile phones.',
    icon: 'Smartphone',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    details: 'Reach your audience wherever they are. Our mobile-first approach ensures that features scale gracefully to any screen size. Touch-friendly interfaces and adaptive layouts provide an optimal viewing experience on every device.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'integrations',
    title: 'Seamless Integrations',
    description: 'Connect with your favorite tools and workflows effortlessly through our robust API.',
    icon: 'Layers',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
    details: 'Extend the functionality to fit your exact needs. We offer out-of-the-box integrations with hundreds of popular services. Developers will love our comprehensive API documentation and flexible webhook system.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'global',
    title: 'Global Reach',
    description: 'Deployed across a global edge network to ensure low latency everywhere in the world.',
    icon: 'Globe',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-100',
    details: 'Distance is no longer a barrier. By leveraging a worldwide content delivery network, we serve your content from the server closest to your user. This drastically reduces latency and improves the experience for a global audience.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953eb1b5b6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'modern-tech',
    title: 'Modern Technology Stack',
    description: 'Built with React, Tailwind CSS, and other modern libraries for rapid development.',
    icon: 'Code',
    color: 'text-rose-500',
    bgColor: 'bg-rose-100',
    details: 'We build on the shoulders of giants. Using the latest stable releases of modern frameworks ensures long-term maintainability, excellent developer experience, and access to a vibrant ecosystem of community tools.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  }
];

export const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Zap': return Zap;
    case 'Shield': return Shield;
    case 'Smartphone': return Smartphone;
    case 'Layers': return Layers;
    case 'Globe': return Globe;
    case 'Code': return Code;
    default: return Zap;
  }
};
