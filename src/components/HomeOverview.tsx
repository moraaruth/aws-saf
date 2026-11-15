import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Layers } from 'lucide-react';
import { ALL_CHAPTERS } from '../data/chapters';
import { EXAM_DOMAINS } from '../data/glossary';
import { AppView } from './TopBar';
import textbookCoverImg from '../assets/images/textbook_cover_editorial_1794653481235.jpg';

interface HomeOverviewProps {
  completedWeeks: number[];
  answeredQuestions: Record<string, number>;
  lastReadWeek: number;
  onOpenChapter: (week: number) => void;
  onNavigate: (view: AppView) => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({
  completedWeeks,
  answeredQuestions,
  lastReadWeek,
  onOpenChapter,
  onNavigate,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const totalQuestions = ALL_CHAPTERS.reduce((acc, ch) => acc + ch.questions.length, 0);
  const totalAnswered = Object.keys(answeredQuestions).length;
  const totalCorrect = ALL_CHAPTERS.flatMap((c) => c.questions).filter(
    (q) => answeredQuestions[q.id] === q.correctIndex,
  ).length;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-16">
      {/* Hero Split: Editorial Textbook Cover */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <div className="space-y-5">
            <p className="text-xs font-medium text-emerald-800 tracking-wide">
              12-Week Self-Study · AWS Certified AI Practitioner
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12] max-w-2xl">
              Learn AWS AI from zero through the Safaricom products you already know.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Designed for every Safaricom team—Customer Care, M-PESA Operations, Retail, Sales,
              Supervisors, and Software Engineering. Every concept starts from  ,
              exs every technical term immediately, and connects directly to M-PESA, *100, Zuri,
              MySafaricom App, Home Fibre, and Daraja API.
            </p>
            <p className="text-xs text-slate-500 max-w-2xl">
              Note on scope: All Safaricom AWS architectures in this textbook are illustrative
              learning scenarios created for certification preparation, not statements about
              Safaricom’s internal production architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenChapter(lastReadWeek)}
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              <span>
                {completedWeeks.length === 0
                  ? 'Start Chapter 1: AI & ML Foundations'
                  : `Continue Chapter ${lastReadWeek}`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('exam')}
              className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-700"
            >
              Open 120-Question Exam Bank
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="h-full min-h-[280px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            {!imgFailed ? (
              <img
                src={textbookCoverImg}
                alt="Editorial geometric glass and paper layers illustrating the Safaricom AWS AI Practitioner self-study textbook"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-emerald-50 via-white to-slate-100 p-8 flex flex-col justify-end">
                <BookOpen className="w-8 h-8 text-emerald-700 mb-4" />
                <p className="text-lg font-semibold text-slate-900">
                  Safaricom AWS AI Practitioner Textbook
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  12 Self-Study Chapters · 20 AWS Services · 120 Practice Questions
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full-Width 4-Column Curriculum & Progress Strip */}
      <section
        aria-label="Textbook metrics and study progress"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-y border-slate-200 py-6 bg-white px-6 rounded-xl border"
      >
        <div>
          <p className="text-xs text-slate-500">Chapters Completed</p>
          <p className="text-2xl font-bold text-slate-950 tabular-nums mt-1">
            {completedWeeks.length} / {ALL_CHAPTERS.length}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500">AWS Services Mastered</p>
          <p className="text-2xl font-bold text-slate-950 tabular-nums mt-1">20 Services</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Practice Questions Answered</p>
          <p className="text-2xl font-bold text-slate-950 tabular-nums mt-1">
            {totalAnswered} / {totalQuestions}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Current Quiz Accuracy</p>
          <p className="text-2xl font-bold text-emerald-800 tabular-nums mt-1">
            {totalAnswered > 0 ? `${Math.round((totalCorrect / totalAnswered) * 100)}%` : 'Not started'}
          </p>
        </div>
      </section>

      {/* Official AIF-C01 Exam Blueprint Alignment */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Official AIF-C01 Exam Blueprint
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Every chapter maps directly to the five weighted AWS Certified AI Practitioner exam domains.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="text-sm font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 whitespace-nowrap cursor-pointer self-start sm:self-auto"
          >
            Compare all 20 AWS Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {EXAM_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <p className="text-xs text-slate-500 tabular-nums">
                  Domain {domain.number} · {domain.weightPercent}% Weight
                </p>
                <h3 className="text-base font-semibold text-slate-950 leading-snug">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{domain.description}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 tabular-nums">
                  Weeks {domain.weeks[0]}–{domain.weeks[domain.weeks.length - 1]}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenChapter(domain.weeks[0])}
                  className="font-semibold text-emerald-800 hover:underline cursor-pointer"
                >
                  Open Week {domain.weeks[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete 12-Week Table of Contents */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Complete 12-Week Curriculum
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Read sequentially from Week 1 or jump directly into any chapter. Each week includes full explanations, a 9-step Safaricom worked example, an interactive pipeline diagram, and 10 exam questions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('products')}
            className="text-sm font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 whitespace-nowrap cursor-pointer self-start sm:self-auto inline-flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4" />
            <span>Safaricom Product Map</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_CHAPTERS.map((chapter) => {
            const isCompleted = completedWeeks.includes(chapter.week);
            const chAnswered = chapter.questions.filter(
              (q) => answeredQuestions[q.id] !== undefined,
            ).length;
            const chCorrect = chapter.questions.filter(
              (q) => answeredQuestions[q.id] === q.correctIndex,
            ).length;

            return (
              <button
                key={chapter.week}
                type="button"
                onClick={() => onOpenChapter(chapter.week)}
                className="text-left bg-white border border-slate-200 hover:border-emerald-600 rounded-xl p-6 flex flex-col justify-between transition-colors cursor-pointer group focus-visible:outline-2 focus-visible:outline-emerald-700"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 tabular-nums">
                    <span>
                      Chapter {chapter.week} · {chapter.domainWeight}
                    </span>
                    {isCompleted ? (
                      <span className="text-emerald-800 font-semibold inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Completed
                      </span>
                    ) : (
                      <span>{chapter.estimatedReadMinutes} min read</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-emerald-800 transition-colors leading-snug">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {chapter.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <p className="text-slate-500 truncate">
                    Safaricom: {chapter.featuredProducts.slice(0, 3).join(', ')}
                  </p>
                  <div className="flex items-center justify-between text-slate-700 font-medium tabular-nums">
                    <span className="truncate max-w-[65%]">
                      AWS: {chapter.featuredServices.join(', ')}
                    </span>
                    <span className="text-emerald-800 shrink-0">
                      Quiz {chCorrect}/{chAnswered || 10}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};
