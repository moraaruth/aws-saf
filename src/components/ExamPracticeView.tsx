import React, { useState, useMemo } from 'react';
import { RotateCcw } from 'lucide-react';
import { ALL_EXAM_QUESTIONS } from '../data/chapters';
import { EXAM_DOMAINS } from '../data/glossary';
import { ExamDomainId } from '../types/textbook';
import { QuestionCard } from './QuestionCard';

interface ExamPracticeViewProps {
  answeredQuestions: Record<string, number>;
  onSelectAnswer: (questionId: string, optionIndex: number) => void;
  onResetAnswer: (questionId: string) => void;
  onResetAllAnswers: () => void;
}

export const ExamPracticeView: React.FC<ExamPracticeViewProps> = ({
  answeredQuestions,
  onSelectAnswer,
  onResetAnswer,
  onResetAllAnswers,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<'all' | ExamDomainId>('all');
  const [selectedWeek, setSelectedWeek] = useState<'all' | number>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unanswered' | 'incorrect'>('all');

  const filteredQuestions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => {
      const domainMatch = selectedDomain === 'all' || q.domainId === selectedDomain;
      const weekMatch = selectedWeek === 'all' || q.week === selectedWeek;
      const chosen = answeredQuestions[q.id];
      const statusMatch =
        statusFilter === 'all' ||
        (statusFilter === 'unanswered' && chosen === undefined) ||
        (statusFilter === 'incorrect' && chosen !== undefined && chosen !== q.correctIndex);
      return domainMatch && weekMatch && statusMatch;
    });
  }, [selectedDomain, selectedWeek, statusFilter, answeredQuestions]);

  const totalAnswered = Object.keys(answeredQuestions).length;
  const totalCorrect = ALL_EXAM_QUESTIONS.filter(
    (q) => answeredQuestions[q.id] === q.correctIndex,
  ).length;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-emerald-800">
            AIF-C01 Practice Bank · 120 Examination-Style Questions
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Exam Practice &amp; Domain Drill
          </h1>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Practise across all five AIF-C01 domains using real Safaricom product scenarios. Every
            question exs both why the correct answer works and why each of the other three
            options is wrong.
          </p>
        </div>

        <button
          type="button"
          onClick={onResetAllAnswers}
          disabled={totalAnswered === 0}
          className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 disabled:opacity-40 text-slate-800 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 whitespace-nowrap self-start md:self-auto cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Answers</span>
        </button>
      </section>

      {/* Scoreboard by Official AIF-C01 Domain */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between">
          <p className="text-xs text-slate-300">Overall Score</p>
          <p className="text-2xl font-bold tabular-nums mt-2">
            {totalCorrect} / {ALL_EXAM_QUESTIONS.length}
          </p>
          <p className="text-xs text-emerald-300 tabular-nums mt-1">
            {totalAnswered} answered (
            {totalAnswered > 0 ? `${Math.round((totalCorrect / totalAnswered) * 100)}%` : '0%'})
          </p>
        </div>

        {EXAM_DOMAINS.map((domain) => {
          const domQs = ALL_EXAM_QUESTIONS.filter((q) => q.domainId === domain.id);
          const domCorrect = domQs.filter(
            (q) => answeredQuestions[q.id] === q.correctIndex,
          ).length;
          const domAnswered = domQs.filter((q) => answeredQuestions[q.id] !== undefined).length;
          const isSelected = selectedDomain === domain.id;

          return (
            <button
              key={domain.id}
              type="button"
              onClick={() =>
                setSelectedDomain((prev) => (prev === domain.id ? 'all' : domain.id))
              }
              className={`text-left rounded-xl p-4 border transition-colors flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'border-emerald-700 bg-emerald-50/70'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <p className="text-xs text-slate-500 tabular-nums">
                  Domain {domain.number} · {domain.weightPercent}%
                </p>
                <p className="text-xs font-semibold text-slate-900 mt-1 line-clamp-2">
                  {domain.title}
                </p>
              </div>
              <p className="text-sm font-bold text-emerald-800 tabular-nums mt-3">
                {domCorrect}/{domQs.length}{' '}
                <span className="text-xs font-normal text-slate-500">
                  ({domAnswered} done)
                </span>
              </p>
            </button>
          );
        })}
      </section>

      {/* Filter Controls */}
      <section className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
            <span>Chapter:</span>
            <select
              value={selectedWeek}
              onChange={(e) =>
                setSelectedWeek(e.target.value === 'all' ? 'all' : Number(e.target.value))
              }
              className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-emerald-700"
            >
              <option value="all">All 12 Weeks</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((w) => (
                <option key={w} value={w}>
                  Week {w}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            {(
              [
                { id: 'all', label: 'All Questions' },
                { id: 'unanswered', label: 'Unanswered' },
                { id: 'incorrect', label: 'Needs Review' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  statusFilter === tab.id
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs font-medium text-slate-600 tabular-nums">
          Showing {filteredQuestions.length} of {ALL_EXAM_QUESTIONS.length} questions
        </p>
      </section>

      {/* Question List */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-2">
          <p className="text-base font-semibold text-slate-900">
            No questions match this filter combination
          </p>
          <p className="text-sm text-slate-600">
            Reset your Domain, Week, or Status filter above to view questions.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {filteredQuestions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              indexLabel={`Q${idx + 1}`}
              selectedOption={answeredQuestions[q.id]}
              onSelectOption={onSelectAnswer}
              onResetQuestion={onResetAnswer}
            />
          ))}
        </div>
      )}
    </main>
  );
};
