import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart, ShieldCheck, CheckCircle2, Award, Home, Users, Car, ExternalLink } from 'lucide-react';

export default function VideoExperience() {
  const videoStories = [
    {
      id: 'iAdNA80V5-4',
      title: 'Welcome to the League of Veterans of America Inc.',
      subtitle: "Official introduction to LOVOA's mission: providing emergency shelter, adaptive smart homes, and compassionate assistance to wounded and homeless American veterans.",
      duration: '0:58',
      tag: 'Official Welcome',
      icon: ShieldCheck
    },
    {
      id: 'SlsVTadYFlw',
      title: 'Join Us: Build a Solar Shelter for Homeless Veterans',
      subtitle: 'Watch how donor contributions build innovative solar-powered emergency shelters so veterans can transition safely off the streets.',
      duration: '1:30',
      tag: 'Solar Shelter Project',
      icon: Home
    },
    {
      id: 'SUNT5u0dihM',
      title: 'Donate Your Car to Help Veterans Across America',
      subtitle: 'See how vehicle donations in all 50 states provide 100% free towing, maximum IRS tax deductions, and critical funding for veteran shelter.',
      duration: '0:50',
      tag: 'Vehicle Donation',
      icon: Car
    },
    {
      id: 'rEBsUEJwsyI',
      title: "From Desert Storm to Economic Struggle: Veteran Story",
      subtitle: 'An intimate, authentic look at combat veterans navigating post-service hardships and how LOVOA builds a community safety net.',
      duration: '2:49',
      tag: 'Veteran Testimony',
      icon: Users
    },
    {
      id: '4fXgb0dkF3Y',
      title: 'Starting Over: A New American Dream for Our Heroes',
      subtitle: 'Empowering injured and displaced warriors with the transitional shelter, resources, and career transition support they need to thrive.',
      duration: '2:10',
      tag: 'Rebuilding Lives',
      icon: Award
    },
    {
      id: 'n3UxCr22p1U',
      title: 'Building a Solar Powered Homeless Shelter',
      subtitle: 'Inside look at constructing resilient, energy-efficient micro-shelters for veterans facing acute homelessness.',
      duration: '0:57',
      tag: 'Sustainable Shelter',
      icon: Home
    }
  ];

  const [activeVideo, setActiveVideo] = useState(videoStories[0]);

  return (
    <section className="w-full bg-brand-navy-950 py-16 sm:py-20 border-b border-slate-850 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 text-brand-red-400 border border-red-500/30">
                <Play className="w-3.5 h-3.5 fill-current text-brand-red-500" /> Official YouTube Channel
              </span>
              <a
                href="https://www.youtube.com/@lovoa.org1977"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-750 border border-slate-700 transition-colors"
              >
                <span>@lovoa.org1977</span>
                <ExternalLink className="w-3 h-3 text-red-400" />
              </a>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-black text-white">
              See How Your Donation Rebuilds Lives
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Real videos from the official League of Veterans of America YouTube channel showcasing emergency shelters, solar housing, and veteran advocacy in action.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://www.youtube.com/@lovoa.org1977"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-red-500/60 transition-all shadow-sm group"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Visit YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400" />
            </a>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-brand-red-600 hover:bg-brand-red-500 shadow-lg hover:shadow-glow-red transition-all shrink-0"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Support This Mission</span>
            </Link>
          </div>
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
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-400">
                  Now Playing • {activeVideo.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeVideo.duration} min
                </span>
              </div>
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
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">
                Official Channel Videos:
              </h4>
              <span className="text-[11px] text-brand-gold-400 font-semibold">
                6 Featured
              </span>
            </div>

            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
              {videoStories.map((story) => {
                const isSelected = activeVideo.id === story.id;
                const Icon = story.icon;
                return (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setActiveVideo(story)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 group ${
                      isSelected
                        ? 'bg-white/10 border-brand-red-500 shadow-md ring-1 ring-brand-red-500/40'
                        : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-brand-red-600 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-brand-gold-400' : 'text-slate-400'}`}>
                          {story.tag}
                        </span>
                        <span className="text-[10px] text-slate-400 shrink-0 font-mono">
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
                <span>Real shelters, solar units & veteran programs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Official videos by LOVOA (@lovoa.org1977)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Serving veterans across all 50 U.S. states</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
