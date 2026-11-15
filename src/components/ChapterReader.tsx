import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { ALL_CHAPTERS } from '../data/chapters';
import { GLOSSARY_TERMS } from '../data/glossary';
import { Chapter, WorkedExample } from '../types/textbook';
import { QuestionCard } from './QuestionCard';

interface ChapterReaderProps {
  currentWeek: number;
  completedWeeks: number[];
  answeredQuestions: Record<string, number>;
  onSelectWeek: (week: number) => void;
  onToggleComplete: (week: number) => void;
  onSelectAnswer: (questionId: string, optionIndex: number) => void;
  onResetAnswer: (questionId: string) => void;
}

const WorkedExampleBlock: React.FC<{ example: WorkedExample; label: string }> = ({
  example,
  label,
}) => {
  const rows: { key: string; val: string }[] = [
    { key: '1. Safaricom product', val: example.safaricomProduct },
    { key: '2. Customer scenario', val: example.customerScenario },
    { key: '3. Current challenge', val: example.currentChallenge },
    { key: '4. AI application', val: example.aiApplication },
    { key: '5. AWS service', val: example.awsService },
    { key: '6. What the service does', val: example.whatServiceDoes },
    { key: '7. How it works (Input → Output)', val: example.howItWorks },
    { key: '8. Business benefit', val: example.businessBenefit },
    { key: '9. AIF-C01 exam connection', val: example.examConnection },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-medium text-emerald-800">{label}</p>
          <h3 className="text-lg font-bold text-slate-950 mt-0.5">{example.title}</h3>
        </div>
        <span className="text-xs text-slate-500">
          Illustrative learning scenario, not a confirmed Safaricom implementation
        </span>
      </div>
      <dl className="divide-y divide-slate-100">
        {rows.map((item) => (
          <div
            key={item.key}
            className="px-6 py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 text-sm"
          >
            <dt className="md:col-span-4 font-semibold text-slate-800">{item.key}</dt>
            <dd className="md:col-span-8 text-slate-700 leading-relaxed">{item.val}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  currentWeek,
  completedWeeks,
  answeredQuestions,
  onSelectWeek,
  onToggleComplete,
  onSelectAnswer,
  onResetAnswer,
}) => {
  const chapter: Chapter =
    ALL_CHAPTERS.find((c) => c.week === currentWeek) ?? ALL_CHAPTERS[0];

  const [activePipelineStage, setActivePipelineStage] = useState(0);
  const [revealedWalkthroughSteps, setRevealedWalkthroughSteps] = useState<number[]>([0]);
  const [showGlossaryDrawer, setShowGlossaryDrawer] = useState(false);

  useEffect(() => {
    setActivePipelineStage(0);
    setRevealedWalkthroughSteps([0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentWeek]);

  const isCompleted = completedWeeks.includes(chapter.week);
  const chapterAnsweredCount = chapter.questions.filter(
    (q) => answeredQuestions[q.id] !== undefined,
  ).length;
  const chapterCorrectCount = chapter.questions.filter(
    (q) => answeredQuestions[q.id] === q.correctIndex,
  ).length;

  const chapterGlossary = GLOSSARY_TERMS.filter(
    (g) => g.introducedInWeek <= chapter.week,
  ).reverse();

  const toggleWalkthroughStep = (index: number) => {
    setRevealedWalkthroughSteps((prev) =>
      prev.includes(index) ? prev : [...prev, index],
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Sidebar: 12-Chapter Table of Contents + Glossary Toggle */}
      <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-950">All 12 Chapters</h2>
            <span className="text-xs text-slate-500 tabular-nums">
              {completedWeeks.length}/12 done
            </span>
          </div>
          <div className="space-y-1 max-h-[55vh] overflow-y-auto pr-1">
            {ALL_CHAPTERS.map((item) => {
              const active = item.week === chapter.week;
              const done = completedWeeks.includes(item.week);
              return (
                <button
                  key={item.week}
                  type="button"
                  onClick={() => onSelectWeek(item.week)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-start justify-between gap-2 cursor-pointer ${
                    active
                      ? 'bg-emerald-700 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="leading-snug">
                    <span className="tabular-nums font-semibold mr-1.5">
                      {String(item.week).padStart(2, '0')}.
                    </span>
                    {item.title}
                  </span>
                  {done && (
                    <CheckCircle2
                      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        active ? 'text-emerald-200' : 'text-emerald-700'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
          <button
            type="button"
            onClick={() => setShowGlossaryDrawer((prev) => !prev)}
            className="w-full flex items-center justify-between text-sm font-semibold text-slate-900 cursor-pointer"
          >
            <span className="inline-flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              <span>Chapter Glossary ({chapterGlossary.length})</span>
            </span>
            <ChevronRight
              className={`w-4 h-4 text-slate-500 transition-transform ${
                showGlossaryDrawer ? 'rotate-90' : ''
              }`}
            />
          </button>
          <p className="text-xs text-slate-500">
            - meanings for terms introduced up to Chapter {chapter.week}.
          </p>
          {showGlossaryDrawer && (
            <div className="pt-2 border-t border-slate-100 space-y-3 max-h-72 overflow-y-auto pr-1">
              {chapterGlossary.map((g) => (
                <div key={g.id} className="space-y-1">
                  <p className="text-xs font-bold text-slate-900">
                    {g.term}{' '}
                    <span className="font-normal text-slate-500">· Week {g.introducedInWeek}</span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">{g.plainDefinition}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* Main Textbook Chapter Body */}
      <main className="lg:col-span-9 space-y-12">
        {/* Chapter Header */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 tabular-nums">
            <span>
              Chapter {chapter.week} of 12 · {chapter.domainLabel} · {chapter.domainWeight} ·{' '}
              {chapter.estimatedReadMinutes} min study
            </span>
            <button
              type="button"
              onClick={() => onToggleComplete(chapter.week)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isCompleted ? 'Marked Complete' : 'Mark Chapter Complete'}</span>
            </button>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
              {chapter.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {chapter.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
            <div>
              <span className="font-semibold text-slate-800">Safaricom products covered: </span>
              <span className="text-slate-600">{chapter.featuredProducts.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-800">AWS services taught: </span>
              <span className="text-slate-600">{chapter.featuredServices.join(', ')}</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2.5">
            <h2 className="text-sm font-bold text-slate-900">
              What you will master in Chapter {chapter.week}
            </h2>
            <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
              {chapter.learningObjectives.map((obj, idx) => (
                <li key={idx} className="leading-relaxed">
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 1: Opening Real-World Safaricom Scenario */}
        <section className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-emerald-800">
              Section 1 · Starting with a Familiar Product
            </p>
            <h2 className="text-2xl font-bold text-slate-950">
              {chapter.openingScenario.productName}
            </h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5">
            <div className="font-serif-prose prose-measure space-y-4 text-[17px] text-slate-800 leading-[1.75]">
              {chapter.openingScenario.narrative.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 text-sm text-slate-800">
              <span className="font-semibold text-emerald-950">Core Operational Problem: </span>
              {chapter.openingScenario.coreProblemSummary}
            </div>
          </div>
        </section>

        {/* Section 2: Core Concept Explanations (Zero Prior Knowledge Assumed) */}
        <section className="space-y-8">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-emerald-800">
              Section 2 · Step-by-Step Foundations
            </p>
            <h2 className="text-2xl font-bold text-slate-950">
              Understanding the Concepts
            </h2>
          </div>

          {chapter.conceptSections.map((block, bIdx) => (
            <div
              key={bIdx}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-950">{block.heading}</h3>
                <p className="text-sm font-medium text-emerald-800">{block.Intro}</p>
              </div>

              <div className="font-serif-prose prose-measure space-y-4 text-[17px] text-slate-800 leading-[1.75]">
                {block.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {block.subsections?.map((sub, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-950">{sub.heading}</h4>
                  <div className="font-serif-prose prose-measure space-y-4 text-[17px] text-slate-800 leading-[1.75]">
                    {sub.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-[#EDFCF2] p-5 sm:p-6 space-y-2">
                    <p className="text-sm font-bold text-emerald-900">{sub.exampleBox.title}</p>
                    {sub.exampleBox.lines.map((line, lIdx) => (
                      <p key={lIdx} className="text-sm leading-relaxed text-slate-800">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Immediate -Language Term Explanations */}
              {block.keyTermsUsed.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-3">
                  {/* <p className="text-xs font-bold text-slate-900">
                    Key Terms Exed Immediately
                  </p> */}
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {block.keyTermsUsed.map((kt) => (
                      <div key={kt.term} className="space-y-1">
                        <dt className="text-sm font-semibold text-slate-900">{kt.term}</dt>
                        <dd className="text-xs text-slate-600 leading-relaxed">
                          {kt.immediateDefinition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Formal Technical Definition */}
              <div className="border-t border-slate-100 pt-4 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Formal Technical Definition: </span>
                <span>{block.technicalDefinition}</span>
              </div>

              {/* Optional Comparison Table */}
              {block.comparisonTable && (
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-sm border-collapse">
                    <caption className="text-left px-4 py-3 text-xs font-semibold text-slate-700 bg-slate-50 border-b border-slate-200">
                      {block.comparisonTable.caption}
                    </caption>
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700">
                        {block.comparisonTable.headers.map((h) => (
                          <th key={h} className="px-4 py-2.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {block.comparisonTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/60">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-4 py-3 text-xs leading-relaxed ${
                                cIdx === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Section 3: Worked Safaricom Example (9-Step Complete Breakdown) */}
        <section className="space-y-5">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-emerald-800">
              Section 3 · Complete Worked Example
            </p>
            <h2 className="text-2xl font-bold text-slate-950">
              Safaricom Scenario to AWS Solution
            </h2>
          </div>

          <WorkedExampleBlock example={chapter.workedExample} label="Primary Worked Example" />
          {chapter.secondaryWorkedExample && (
            <WorkedExampleBlock
              example={chapter.secondaryWorkedExample}
              label="Second Worked Example"
            />
          )}
        </section>

        {/* Section 4: Interactive Input -> AWS Service -> Output Pipeline Visualizer */}
        <section className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-emerald-800">
              Section 4 · Interactive Flow Diagram
            </p>
            <h2 className="text-2xl font-bold text-slate-950">{chapter.pipelineDiagram.title}</h2>
            <p className="text-sm text-slate-600">{chapter.pipelineDiagram.subtitle}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {chapter.pipelineDiagram.stages.map((stage, idx) => {
                const selected = idx === activePipelineStage;
                return (
                  <button
                    key={stage.stepNumber}
                    type="button"
                    onClick={() => setActivePipelineStage(idx)}
                    className={`text-left p-4 rounded-lg border transition-colors cursor-pointer ${
                      selected
                        ? 'border-emerald-700 bg-emerald-50/70'
                        : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                    }`}
                  >
                    <p className="text-xs font-semibold text-emerald-800 tabular-nums">
                      Stage {stage.stepNumber}
                    </p>
                    <p className="text-sm font-bold text-slate-950 mt-1">{stage.stageLabel}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{stage.actorOrComponent}</p>
                  </button>
                );
              })}
            </div>

            {chapter.pipelineDiagram.stages[activePipelineStage] && (
              <div className="border border-slate-200 rounded-lg p-5 bg-slate-50 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-950">
                    Stage {chapter.pipelineDiagram.stages[activePipelineStage].stepNumber}:{' '}
                    {chapter.pipelineDiagram.stages[activePipelineStage].stageLabel}
                  </span>
                  <span className="text-xs font-medium text-emerald-800">
                    Component:{' '}
                    {chapter.pipelineDiagram.stages[activePipelineStage].actorOrComponent}
                  </span>
                </div>
                <div className="bg-slate-900 text-emerald-100 rounded-lg p-4 font-mono-code text-xs leading-relaxed overflow-x-auto">
                  {chapter.pipelineDiagram.stages[activePipelineStage].dataPayload}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {chapter.pipelineDiagram.stages[activePipelineStage].Explanation}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: AWS Service Deep-Dives & Boundaries */}
        <section className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-emerald-800">
              Section 5 · AWS Service Boundaries
            </p>
            <h2 className="text-2xl font-bold text-slate-950">
              When to Use — and When NOT to Use — Each Service
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {chapter.serviceDeepDives.map((svc) => (
              <div
                key={svc.serviceName}
                className="bg-white border border-slate-200 rounded-xl p-6 space-y-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-950">{svc.serviceName}</h3>
                  <span className="text-xs font-medium text-slate-500">{svc.roleInChapter}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-emerald-50/40 border border-emerald-200 rounded-lg p-4 space-y-1">
                    <p className="text-xs font-bold text-emerald-900">When to use</p>
                    <p className="text-slate-800 leading-relaxed">{svc.whenToUse}</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
                    <p className="text-xs font-bold text-slate-800">When NOT to use</p>
                    <p className="text-slate-700 leading-relaxed">{svc.whenNotToUse}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 pt-1">
                  <div>
                    <span className="font-semibold text-slate-800 block">Receives (Input):</span>
                    {svc.inputType}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block">Produces (Output):</span>
                    {svc.outputType}
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-800 block">AIF-C01 Exam Clue:</span>
                    {svc.examClue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Interactive Guided Walkthrough */}
        <section className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-emerald-800">
              Section 6 · Guided Practical Walkthrough
            </p>
            <h2 className="text-2xl font-bold text-slate-950">
              {chapter.guidedWalkthrough.title}
            </h2>
            <p className="text-sm text-slate-600">
              {chapter.guidedWalkthrough.objective} · Setting:{' '}
              {chapter.guidedWalkthrough.safaricomSetting}
            </p>
          </div>

          <div className="space-y-4">
            {chapter.guidedWalkthrough.steps.map((step, idx) => {
              const isRevealed = revealedWalkthroughSteps.includes(idx);
              return (
                <div
                  key={step.stepTitle}
                  className="bg-white border border-slate-200 rounded-xl p-6 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-base font-bold text-slate-950">{step.stepTitle}</h3>
                    {!isRevealed && (
                      <button
                        type="button"
                        onClick={() => toggleWalkthroughStep(idx)}
                        className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        {step.guidedActionLabel}
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{step.situation}</p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 font-mono-code text-xs text-slate-700">
                    Input: {step.inputSample}
                  </div>
                  {isRevealed && (
                    <div className="bg-emerald-50/50 border border-emerald-200 rounded-lg p-4 space-y-2 text-sm">
                      <p className="font-semibold text-emerald-950">
                        Result: {step.resultingOutput}
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold text-slate-900">Why this works: </span>
                        {step.whyThisWorks}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 7: Responsible AI, Privacy & Security + Recap */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-xs font-semibold text-emerald-800">
              Section 7 · Responsible AI &amp; Privacy
            </p>
            <h3 className="text-lg font-bold text-slate-950">
              {chapter.responsibleAiAndSecurity.title}
            </h3>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              {chapter.responsibleAiAndSecurity.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="space-y-2 text-xs text-slate-700 list-disc pl-4 pt-2 border-t border-slate-100">
              {chapter.responsibleAiAndSecurity.practicalChecklist.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-xs font-semibold text-emerald-800">Chapter Recap</p>
            <h3 className="text-lg font-bold text-slate-950">
              Key Takeaways Before You Practise
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-700 list-disc pl-5">
              {chapter.chapterSummary.map((point, idx) => (
                <li key={idx} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 8: 10 AIF-C01 Chapter Practice Questions */}
        <section className="space-y-5 pt-4 border-t border-slate-200">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-emerald-800">
                Section 8 · Chapter {chapter.week} Exam Practice
              </p>
              <h2 className="text-2xl font-bold text-slate-950">
                10 AIF-C01 Practice Questions
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Select an answer to see immediately why it is right and why each of the other options is wrong.
              </p>
            </div>
            <div className="text-sm font-semibold text-slate-800 tabular-nums bg-white border border-slate-200 rounded-lg px-4 py-2">
              Score: {chapterCorrectCount} / {chapter.questions.length} ({chapterAnsweredCount}{' '}
              answered)
            </div>
          </div>

          <div className="space-y-5">
            {chapter.questions.map((q, idx) => (
              <QuestionCard
                key={q.id}
                question={q}
                indexLabel={`Question ${idx + 1} of ${chapter.questions.length}`}
                selectedOption={answeredQuestions[q.id]}
                onSelectOption={onSelectAnswer}
                onResetQuestion={onResetAnswer}
              />
            ))}
          </div>
        </section>

        {/* Chapter Footer Navigation */}
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <button
            type="button"
            disabled={chapter.week <= 1}
            onClick={() => onSelectWeek(chapter.week - 1)}
            className="px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Chapter</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleComplete(chapter.week)}
            className="px-4 py-2.5 rounded-lg border border-emerald-700 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 inline-flex items-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>{isCompleted ? 'Completed' : `Mark Chapter ${chapter.week} Complete`}</span>
          </button>

          <button
            type="button"
            disabled={chapter.week >= 12}
            onClick={() => onSelectWeek(chapter.week + 1)}
            className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Next Chapter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </footer>
      </main>
    </div>
  );
};
