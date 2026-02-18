"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Calendar, User, Search, FileText, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Requirement Discussion",
    subtitle: "We understand your goals, stack, and culture",
    content: {
      heading: "Define Your Needs",
      description: "We dive deep into your technical requirements, team dynamics, and project goals to create a precise talent profile.",
      points: [
        "Technical stack & seniority alignment",
        "Cultural fit & communication preferences",
        "Project timeline & deliverables definition"
      ]
    }
  },
  {
    number: "02",
    title: "Resource Shortlisting",
    subtitle: "Vetted profiles within 48 hours",
    content: {
      heading: "Curated Talent Pool",
      description: "Our AI-driven matching system combined with expert recruiters ensures you only see the top 1% of relevant candidates.",
      points: [
        " rigorous technical pre-screening",
        "Soft skills & language proficiency checks",
        "Detailed candidate profiles & portfolios"
      ]
    }
  },
  {
    number: "03",
    title: "Interview & Selection",
    subtitle: "Meet your future team members",
    content: {
      heading: "Seamless Interview Process",
      description: "Interview candidates directly to ensure they meet your standards. We handle scheduling and logistics.",
      points: [
        "Direct technical interviews",
        "Live coding sessions supported",
        "Immediate feedback loops"
      ]
    }
  },
  {
    number: "04",
    title: "Onboarding & Integration",
    subtitle: "Day one productivity",
    content: {
      heading: "Smooth Kick-off",
      description: "We manage contracts, compliance, and equipment so your new team member is ready to code from day one.",
      points: [
        "Automated contract & NDA management",
        "Security & compliance & training",
        "Integration into your Slack/Jira/Git"
      ]
    }
  }
];

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    // Fill refs array
    sectionRefs.current = sectionRefs.current.slice(0, steps.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-section-index"));
            if (!isNaN(index)) {
               // Logic to determine "most" visible can be complex, 
               // generic intersection often enough for sticky highlights if threshold is right.
               // For smoother updates, we might want to use the scroll listener approach primarily
               // or high thresholds. Let's use a simple center-point check in scroll listener for precision.
            }
          }
        });
      },
      { threshold: 0.5 }
    );
     // We will rely more on the scroll listener for the active state to be perfectly synced with the center of the screen
     return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      let closestSection = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        // Check distance of section center to viewport center
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = index;
        }
      });

      if (closestSection !== activeIndexRef.current) {
        activeIndexRef.current = closestSection;
        setActiveIndex(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-white" id="process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[400px,1fr] gap-12 lg:gap-24 relative">
          
          {/* Left: Sticky Sidebar */}
          <div className="lg:sticky lg:top-32 h-fit order-1">
             <div className="mb-10">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
                  How We Work
                </h2>
                <p className="text-zinc-500 text-lg">
                  A transparent, streamlined process to get you the best talent.
                </p>
             </div>

             {/* Steps Navigation */}
             <div className="relative pl-6 lg:border-l lg:border-zinc-100">
                {/* Active Indicator Line for Desktop */}
                <div 
                  className="hidden lg:block absolute left-[-1px] w-[2px] bg-indigo-600 transition-all duration-300 ease-out"
                  style={{ 
                    top: `${activeIndex * 80}px`, // Approx height of a step item
                    height: '60px',
                    transform: 'translateY(10px)' 
                  }}
                />

                <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                  {steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        sectionRefs.current[index]?.scrollIntoView({
                          behavior: "smooth",
                          block: "center"
                        });
                      }}
                      className={cn(
                        "text-left group flex-shrink-0 lg:flex-shrink w-64 lg:w-auto transition-all duration-300 lg:pl-6 rounded-xl border lg:border-0 p-4 lg:p-2",
                         activeIndex === index ? "bg-zinc-50 border-zinc-200 lg:bg-transparent" : "border-transparent text-zinc-400"
                      )}
                    >
                      <div className={cn(
                        "text-xs font-bold tracking-widest uppercase mb-1",
                        activeIndex === index ? "text-indigo-600" : "text-zinc-400 group-hover:text-zinc-500"
                      )}>
                        Step {step.number}
                      </div>
                      <div className={cn(
                        "text-lg font-bold transition-colors",
                         activeIndex === index ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"
                      )}>
                        {step.title}
                      </div>
                      <div className={cn(
                         "text-sm mt-1 transition-colors",
                         activeIndex === index ? "text-zinc-600" : "text-zinc-300"
                      )}>
                        {step.subtitle}
                      </div>
                    </button>
                  ))}
                </div>
             </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="order-2 py-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { sectionRefs.current[index] = el; }}
                data-section-index={index}
                className="min-h-[80vh] flex flex-col justify-center py-12"
              >
                  <div className={cn(
                    "transition-all duration-500 ease-out",
                    activeIndex === index ? "opacity-100 translate-y-0" : "opacity-30 translate-y-10"
                  )}>
                    
                    <div className="mb-8">
                       <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 font-bold mb-6">
                         {step.number}
                       </span>
                       <h3 className="font-display text-3xl font-bold text-zinc-900 mb-4">
                         {step.content.heading}
                       </h3>
                       <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
                         {step.content.description}
                       </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                       {/* Points */}
                       <div className="space-y-4">
                          {step.content.points.map((point, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                               <Check className="w-5 h-5 text-indigo-600" />
                               <span className="text-zinc-700 font-medium">{point}</span>
                            </div>
                          ))}
                       </div>

                       {/* Visual Mocks */}
                       <div className="relative">
                          {index === 0 && (
                             <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-4 border-b border-zinc-100 pb-4">
                                   <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                      <FileText size={20} />
                                   </div>
                                   <div>
                                      <div className="text-sm font-bold text-zinc-900">Job Requirement</div>
                                      <div className="text-xs text-zinc-500">Sr. React Developer</div>
                                   </div>
                                </div>
                                <div className="space-y-2">
                                  <div className="h-2 w-3/4 bg-zinc-100 rounded"></div>
                                  <div className="h-2 w-1/2 bg-zinc-100 rounded"></div>
                                  <div className="flex gap-2 mt-4">
                                    <span className="px-2 py-1 bg-zinc-100 text-xs rounded text-zinc-600">React</span>
                                    <span className="px-2 py-1 bg-zinc-100 text-xs rounded text-zinc-600">TypeScript</span>
                                    <span className="px-2 py-1 bg-zinc-100 text-xs rounded text-zinc-600">Node.js</span>
                                  </div>
                                </div>
                             </div>
                          )}

                          {index === 1 && (
                            <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 -rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                  {[1, 2].map(i => (
                                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-zinc-50 rounded-lg transition-colors cursor-pointer">
                                       <div className="w-10 h-10 bg-zinc-200 rounded-full overflow-hidden">
                                           {/* Placeholder avatar */}
                                           <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                                       </div>
                                       <div className="flex-1">
                                          <div className="h-3 w-24 bg-zinc-200 rounded mb-1"></div>
                                          <div className="h-2 w-16 bg-zinc-100 rounded"></div>
                                       </div>
                                       <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center">
                                          <Check size={12} className="text-transparent" />
                                       </div>
                                    </div>
                                  ))}
                                  <div className="flex items-center gap-4 p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
                                        <div className="w-10 h-10 bg-zinc-200 rounded-full overflow-hidden">
                                          <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-400" />
                                       </div>
                                       <div className="flex-1">
                                          <div className="text-sm font-bold text-zinc-900">Sarah Jenkins</div>
                                          <div className="text-xs text-indigo-600">Top Match (98%)</div>
                                       </div>
                                       <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                                          <Check size={14} className="text-white" />
                                       </div>
                                  </div>
                                </div>
                            </div>
                          )}

                          {index === 2 && (
                             <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="text-center mb-6">
                                   <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full mb-2">
                                      <Calendar size={24} />
                                   </div>
                                    <div className="text-sm font-bold text-zinc-900">Interview Scheduled</div>
                                   <div className="text-xs text-zinc-500">Thursday, 24th Oct • 10:00 AM</div>
                                </div>
                                <div className="flex justify-between items-center bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                                   <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">SJ</div>
                                      <div className="text-xs font-medium text-zinc-700">Sarah J.</div>
                                   </div>
                                   <div className="h-px w-8 bg-zinc-300"></div>
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">You</div>
                                      <div className="text-xs font-medium text-zinc-700">CTO</div>
                                   </div>
                                </div>
                             </div>
                          )}

                          {index === 3 && (
                             <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 hover:scale-105 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                   <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                      <Check size={24} />
                                   </div>
                                   <div>
                                      <div className="text-lg font-bold text-zinc-900">All Set!</div>
                                      <div className="text-sm text-zinc-500">Onboarding Complete</div>
                                   </div>
                                </div>
                                <div className="space-y-3">
                                   {['NDA Signed', 'Slack Invitation Sent', 'GitLab Access Granted', 'Laptop Dispatched'].map((item,k) => (
                                     <div key={k} className="flex items-center justify-between text-sm">
                                        <span className="text-zinc-600">{item}</span>
                                        <Check size={14} className="text-green-500" />
                                     </div>
                                   ))}
                                </div>
                             </div>
                          )}
                       </div>
                    </div>

                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
