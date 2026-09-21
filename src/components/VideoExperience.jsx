import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart, ShieldCheck, CheckCircle2, Award, Home, Users } from 'lucide-react';

export default function VideoExperience() {
  const videoStories = [
    {
      id: '038NDuS4C8w',
      title: 'Restoring Independence: Adapted Smart Home for Wounded Heroes',
      subtitle: 'See how donor-funded smart technology and wheelchair accessibility give wounded veterans their independence back.',
      duration: '4:28 min',
      tag: 'Smart Homes & Wounded Vets',
      icon: Home
    },
    {
      id: 'ENmv4MMkM_w',
      title: 'A Second Chance: U.S. Army Staff Sergeant Story',
      subtitle: 'Watch how community shelter and housing assistance changed the life of injured combat veteran SSG Jessica Vazquez.',
      duration: '3:45 min',
      tag: 'Shelter & Recovery',
      icon: Users
    },
    {
      id: 'Jwj4JKUFOQc',
      title: 'Building Homes for Heroes: Nationwide Mission in Action',
      subtitle: 'An inspiring overview of how non-profit housing programs bring hope, dignity, and mortgage-free homes to service members.',
      duration: '2:30 min',
      tag: 'Nationwide Advocacy',
      icon: Award
    }
  ];

  const [activeVideo, setActiveVideo] = useState(videoStories[0]);

  return (
    <section className="w-full bg-brand-navy-950 py-16 sm:py-20 border-b border-slate-850 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 text-brand-red-400 border border-red-500/30">
              <Play className="w-3.5 h-3.5 fill-current text-brand-red-500" /> Video Experience
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-black text-white">
              See How Your Donation Rebuilds Lives
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Experience the real human impact of veteran housing, transitional shelters, and adaptive smart homes funded by supporters like you.
            </p>
          </div>

          <Link
            to="/donate"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-500 shadow-lg hover:shadow-glow-red transition-all shrink-0"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Support This Mission</span>
          </Link>
        </div>

        {/* Video Player & Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Embedded YouTube Player (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/80 bg-black">
              <iframe
                key={activeVideo.id}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=0&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video description */}
            <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-400">
                Now Playing • {activeVideo.tag}
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                {activeVideo.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeVideo.subtitle}
              </p>
            </div>
          </div>

          {/* Video Playlist Selector & Impact Points (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">
              Select an Impact Story:
            </h4>

            <div className="space-y-3">
              {videoStories.map((story) => {
                const isSelected = activeVideo.id === story.id;
                const Icon = story.icon;
                return (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setActiveVideo(story)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 group ${
                      isSelected
                        ? 'bg-white/10 border-brand-red-500 shadow-md ring-1 ring-brand-red-500/40'
                        : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-brand-red-600 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-brand-gold-400' : 'text-slate-400'}`}>
                          {story.tag}
                        </span>
                        <span className="text-[10px] text-slate-400 shrink-0">
                          {story.duration}
                        </span>
                      </div>
                      <h5 className="font-display font-bold text-xs text-white line-clamp-2 leading-snug">
                        {story.title}
                      </h5>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Impact Highlights Box */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs text-slate-300">
              <span className="font-bold text-white block uppercase tracking-wider text-[11px]">
                Why Video Transparency Matters:
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real veterans, verified adapted homes & shelters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Tax-Deductible non-profit allocations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nationwide operations across all 50 U.S. states</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
