import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { AWS_SERVICES_GUIDE, SERVICE_COMPARISON_PAIRS } from '../data/services';
import { AwsServiceGuideEntry } from '../types/textbook';

interface ServiceGuideViewProps {
  onOpenChapter: (week: number) => void;
}

const CATEGORIES: ('All' | AwsServiceGuideEntry['category'])[] = [
  'All',
  'Generative AI & Foundation Models',
  'Machine Learning Platform',
  'Pre-Trained Speech, Language & Vision',
  'Conversational & Workplace Assistants',
  'Storage, Security, Governance & Monitoring',
];

export const ServiceGuideView: React.FC<ServiceGuideViewProps> = ({ onOpenChapter }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | AwsServiceGuideEntry['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeComparisonId, setActiveComparisonId] = useState(SERVICE_COMPARISON_PAIRS[0].id);

  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return AWS_SERVICES_GUIDE.filter((svc) => {
      const catMatch = selectedCategory === 'All' || svc.category === selectedCategory;
      const queryMatch =
        !q ||
        svc.name.toLowerCase().includes(q) ||
        svc.oneLineRule.toLowerCase().includes(q) ||
        svc.safaricomExample.toLowerCase().includes(q) ||
        svc.examRecognitionClues.some((c) => c.toLowerCase().includes(q));
      return catMatch && queryMatch;
    });
  }, [selectedCategory, searchQuery]);

  const activePair =
    SERVICE_COMPARISON_PAIRS.find((p) => p.id === activeComparisonId) ??
    SERVICE_COMPARISON_PAIRS[0];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-semibold text-emerald-800">
          AWS Service Recognition Cheat Sheet · 20 Core Services
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
          AWS AI &amp; Governance Service Reference
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Every AWS service required for the AIF-C01 exam—exed with exact
          inputs, outputs, clear boundaries on when NOT to use it, and illustrative Safaricom
          product scenarios.
        </p>
      </section>

      {/* Side-by-Side Service Distinction Lab */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-950">
            Which Service Should You Choose? (Common Exam Distinctions)
          </h2>
          <p className="text-sm text-slate-600">
            Select a commonly confused pair below to see the exact exam boundary and Safaricom rule of thumb.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {SERVICE_COMPARISON_PAIRS.map((pair) => {
            const active = pair.id === activePair.id;
            return (
              <button
                key={pair.id}
                type="button"
                onClick={() => setActiveComparisonId(pair.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {pair.title}
              </button>
            );
          })}
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-slate-950">{activePair.title}</h3>
            <span className="text-xs text-slate-500">
              {activePair.leftService} vs. {activePair.rightService}
            </span>
          </div>
          <p className="text-sm text-slate-800 leading-relaxed">{activePair.keyDistinction}</p>
          <p className="text-sm text-emerald-950 bg-emerald-50/70 border border-emerald-200 rounded-lg p-4 leading-relaxed">
            <span className="font-semibold">Safaricom Rule of Thumb: </span>
            {activePair.safaricomRuleOfThumb}
          </p>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search service, clue, or product..."
              aria-label="Search AWS services"
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-700"
            />
          </div>
        </div>

        {filteredServices.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-2">
            <p className="text-base font-semibold text-slate-900">No matching AWS services</p>
            <p className="text-sm text-slate-600">
              Try clearing your search filter or selecting &ldquo;All&rdquo; categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredServices.map((svc) => (
              <article
                key={svc.id}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500">
                      {svc.category} · Taught in{' '}
                      {svc.taughtInWeeks.map((w) => `Week ${w}`).join(', ')}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-950">{svc.name}</h3>
                    <p className="text-sm font-medium text-emerald-800">{svc.oneLineRule}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenChapter(svc.taughtInWeeks[0])}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Read in Chapter {svc.taughtInWeeks[0]}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">What it is</h4>
                      <p>{svc.whatItIs}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Problem it solves</h4>
                      <p>{svc.problemItSolves}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
                      <p>
                        <span className="font-bold text-slate-900">Receives (Inputs): </span>
                        {svc.inputs}
                      </p>
                      <p>
                        <span className="font-bold text-slate-900">Produces (Outputs): </span>
                        {svc.outputs}
                      </p>
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 text-xs text-slate-800 leading-relaxed">
                      <span className="font-bold text-emerald-950 block mb-1">
                        Safaricom Illustrative Example
                      </span>
                      {svc.safaricomExample}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-emerald-900">When to use</h4>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700 leading-relaxed">
                      {svc.whenToUse.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-slate-900">When NOT to use</h4>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600 leading-relaxed">
                      {svc.whenNotToUse.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      How to spot it on the AIF-C01 exam
                    </span>
                    <ul className="space-y-1 text-emerald-900 font-mono-code">
                      {svc.examRecognitionClues.map((clue, idx) => (
                        <li key={idx}>{clue}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      Do not confuse with
                    </span>
                    <ul className="space-y-1 text-slate-600">
                      {svc.commonlyConfusedWith.map((cw) => (
                        <li key={cw.otherService}>
                          <span className="font-semibold text-slate-800">{cw.otherService}: </span>
                          {cw.difference}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
