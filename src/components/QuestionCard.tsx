import React from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { ExamQuestion } from '../types/textbook';

interface QuestionCardProps {
  question: ExamQuestion;
  indexLabel: string;
  selectedOption: number | undefined;
  onSelectOption: (questionId: string, optionIndex: number) => void;
  onResetQuestion?: (questionId: string) => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  indexLabel,
  selectedOption,
  onSelectOption,
  onResetQuestion,
}) => {
  const isAnswered = selectedOption !== undefined;
  const isCorrect = isAnswered && selectedOption === question.correctIndex;

  return (
    <article className="bg-white border border-slate-200 rounded-xl p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <span className="tabular-nums font-medium text-slate-700">
          {indexLabel} · Week {question.week} · {question.domainLabel}
        </span>
        <span>
          Product: {question.safaricomProduct} · Concept: {question.awsServiceOrConcept}
        </span>
      </div>

      <h4 className="text-base sm:text-lg font-semibold text-slate-950 leading-snug">
        {question.question}
      </h4>

      <div className="space-y-2.5" role="radiogroup" aria-label={`Options for ${question.id}`}>
        {question.options.map((opt, idx) => {
          const isThisSelected = selectedOption === idx;
          const isThisCorrect = idx === question.correctIndex;

          let buttonStyle =
            'border-slate-200 bg-white hover:border-emerald-600 hover:bg-emerald-50/30 text-slate-800';
          if (isAnswered) {
            if (isThisCorrect) {
              buttonStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-medium';
            } else if (isThisSelected && !isThisCorrect) {
              buttonStyle = 'border-rose-400 bg-rose-50 text-rose-950';
            } else {
              buttonStyle = 'border-slate-200 bg-slate-50/70 text-slate-600';
            }
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectOption(question.id, idx)}
              className={`w-full text-left px-4 py-3.5 rounded-lg border text-sm transition-colors flex items-start gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-700 ${buttonStyle}`}
            >
              <span className="font-mono-code font-semibold shrink-0 mt-0.5">
                {OPTION_LETTERS[idx]}.
              </span>
              <span className="flex-1 leading-relaxed">{opt}</span>
              {isAnswered && isThisCorrect && (
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              )}
              {isAnswered && isThisSelected && !isThisCorrect && (
                <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="pt-4 border-t border-slate-200 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <p
              className={`text-sm font-semibold flex items-center gap-2 ${
                isCorrect ? 'text-emerald-800' : 'text-rose-800'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Correct — Answer {OPTION_LETTERS[question.correctIndex]}
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Incorrect — You selected {OPTION_LETTERS[selectedOption]}, Correct answer is{' '}
                    {OPTION_LETTERS[question.correctIndex]}
                  </span>
                </>
              )}
            </p>
            {onResetQuestion && (
              <button
                type="button"
                onClick={() => onResetQuestion(question.id)}
                className="text-xs font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try again</span>
              </button>
            )}
          </div>

          <p className="text-sm text-slate-800 leading-relaxed bg-emerald-50/50 border border-emerald-200 rounded-lg p-4">
            <span className="font-semibold text-emerald-950">Why {OPTION_LETTERS[question.correctIndex]} is correct: </span>
            {question.correctExplanation}
          </p>

          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-slate-600">
              Option-by-option breakdown
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
              {question.distractorExplanations.map((explanation, optIdx) => (
                <li key={optIdx} className="flex items-start gap-2">
                  <span className="font-mono-code font-semibold text-slate-800 shrink-0">
                    {OPTION_LETTERS[optIdx]}:
                  </span>
                  <span>{explanation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
};
