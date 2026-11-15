import React, { useState } from 'react';
import { CAPSTONE_STAGES, FINAL_REVISION_DOMAINS } from '../data/capstoneAndRevision';
import { AppView } from './TopBar';
import capstoneStudioImg from '../assets/images/capstone_fibre_network_1794653483048.jpg';

interface CapstoneRevisionViewProps {
  onOpenChapter: (week: number) => void;
  onNavigate: (view: AppView) => void;
}

export const CapstoneRevisionView: React.FC<CapstoneRevisionViewProps> = ({
  onOpenChapter,
  onNavigate,
}) => {
  const [activeStage, setActiveStage] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  const stage = CAPSTONE_STAGES[activeStage] ?? CAPSTONE_STAGES[0];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-14">
      {/* Capstone Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <p className="text-xs font-semibold text-emerald-800">
              Capstone Architecture &amp; Final Revision Guide
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
              End-to-End Safaricom Digital Care &amp; M-PESA Reversal Capstone
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              See how all 12 weeks and 20 AWS services connect in one unified illustrative learning
              architecture—from *100 voice intake and Zuri chat through Textract receipt reading,
              Knowledge Bases RAG, Bedrock Agents, Guardrails, and full CloudTrail/CloudWatch
              governance.
            </p>
            <p className="text-xs text-slate-500">
              Illustrative learning capstone only, not a confirmed Safaricom production
              implementation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('exam')}
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Take Final 120-Question Practice
            </button>
            <button
              type="button"
              onClick={() => onOpenChapter(12)}
              className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Review Week 12 Synthesis
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="h-full min-h-[240px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            {!imgFailed ? (
              <img
                src={capstoneStudioImg}
                alt="Sunlit corporate telecommunications learning studio in Nairobi with emerald accents"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full min-h-[240px] bg-gradient-to-br from-emerald-50 to-slate-100 p-8 flex flex-col justify-end">
                <p className="text-lg font-bold text-slate-900">
                  Integrated Safaricom AI Learning Capstone
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  5 Stages · All 5 AIF-C01 Domains Combined
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive 5-Stage Capstone Walkthrough */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-950">
            Interactive 5-Stage Capstone Walkthrough
          </h2>
          <p className="text-sm text-slate-600">
            Click each stage from customer intake to continuous governance to see every AWS service
            in action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {CAPSTONE_STAGES.map((st, idx) => {
            const active = idx === activeStage;
            return (
              <button
                key={st.stageNumber}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`text-left p-3.5 rounded-lg border transition-colors cursor-pointer ${
                  active
                    ? 'border-emerald-700 bg-emerald-700 text-white'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-800'
                }`}
              >
                <p
                  className={`text-xs font-semibold tabular-nums ${
                    active ? 'text-emerald-100' : 'text-emerald-800'
                  }`}
                >
                  Stage {st.stageNumber}
                </p>
                <p className="text-xs font-bold mt-1 leading-snug">{st.title}</p>
              </button>
            );
          })}
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/70 space-y-5">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-semibold text-emerald-800 tabular-nums">
                Stage {stage.stageNumber} of 5
              </p>
              <h3 className="text-xl font-bold text-slate-950 mt-0.5">{stage.title}</h3>
            </div>
            <p className="text-xs font-semibold text-slate-700">
              AWS Services: {stage.awsServicesUsed.join(', ')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-slate-900">Safaricom Touchpoint</p>
                <p className="text-slate-700 leading-relaxed mt-1">{stage.safaricomTouchpoint}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">What Happens in  </p>
                <p className="text-slate-700 leading-relaxed mt-1">
                  {stage.whatHappensIn}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
                <p>
                  <span className="font-bold text-slate-900">Data In: </span>
                  <span className="font-mono-code text-slate-700">{stage.dataIn}</span>
                </p>
                <p>
                  <span className="font-bold text-slate-900">Data Out: </span>
                  <span className="font-mono-code text-slate-700">{stage.dataOut}</span>
                </p>
              </div>
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-4 text-xs text-emerald-950 leading-relaxed">
                <span className="font-bold block mb-1">
                  Responsible AI &amp; Security Control
                </span>
                {stage.responsibleAiAndSecurityControl}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final 5-Domain Revision Guide */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            Final AIF-C01 Exam Revision Guide
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            High-yield concepts, exam trigger clues, and common traps to check before sitting your exam.
          </p>
        </div>

        <div className="space-y-5">
          {FINAL_REVISION_DOMAINS.map((dom) => (
            <article
              key={dom.domainId}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <h3 className="text-xl font-bold text-slate-950">{dom.domainTitle}</h3>
                <span className="text-xs font-semibold text-emerald-800 tabular-nums">
                  Exam Weight: {dom.weight}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900">Must-Know Concepts</h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                    {dom.mustKnowConcepts.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900">High-Yield Exam Triggers</h4>
                  <dl className="space-y-1.5 text-xs">
                    {dom.highYieldExamTriggers.map((t) => (
                      <div
                        key={t.clue}
                        className="bg-slate-50 border border-slate-200 rounded-md px-3 py-2 flex flex-col gap-0.5"
                      >
                        <dt className="text-slate-600">{t.clue}</dt>
                        <dd className="font-semibold text-emerald-900">{t.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="lg:col-span-3 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900">Common Exam Traps</h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                    {dom.commonTraps.map((trap, idx) => (
                      <li key={idx}>{trap}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
