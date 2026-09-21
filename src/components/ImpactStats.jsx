import React from 'react';
import { Users, Home, HeartHandshake, MapPin, Award, Shield } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      value: '700+',
      label: 'Veterans & Heroes Supported',
      description: 'Connected with shelter, crisis intervention, and healthcare last year alone.',
      icon: Users,
      color: 'text-brand-red-600',
      bgColor: 'bg-red-50',
    },
    {
      value: '100+',
      label: 'Shelter & Housing Projects',
      description: 'Emergency beds, transitional housing, and adapted smart living quarters.',
      icon: Home,
      color: 'text-brand-gold-600',
      bgColor: 'bg-amber-50',
    },
    {
      value: '250+',
      label: 'Marginalised People Daily',
      description: 'Hot meals, hygiene kits, and counseling resources distributed every single day.',
      icon: HeartHandshake,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      value: '50',
      label: 'U.S. States Covered',
      description: 'Nationwide logistics for car, truck, RV, and boat donations with free towing.',
      icon: MapPin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section className="relative -mt-6 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-200/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-3xl sm:text-4xl font-display font-black text-brand-navy-950 tracking-tight">
                  {stat.value}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
