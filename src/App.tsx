import { useState, useEffect, useCallback } from 'react';
import { TopBar, AppView } from './components/TopBar';
import { HomeOverview } from './components/HomeOverview';
import { ChapterReader } from './components/ChapterReader';
import { ServiceGuideView } from './components/ServiceGuideView';
import { ProductMapView } from './components/ProductMapView';
import { ExamPracticeView } from './components/ExamPracticeView';
import { CapstoneRevisionView } from './components/CapstoneRevisionView';

const STORAGE_KEY = 'safaricom_aif_c01_textbook_progress_v1';

interface StoredProgress {
  completedWeeks: number[];
  answeredQuestions: Record<string, number>;
  lastReadWeek: number;
}

function loadInitialProgress(): StoredProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { completedWeeks: [], answeredQuestions: {}, lastReadWeek: 1 };
    }
    const parsed = JSON.parse(raw) as Partial<StoredProgress>;
    return {
      completedWeeks: Array.isArray(parsed.completedWeeks) ? parsed.completedWeeks : [],
      answeredQuestions:
        parsed.answeredQuestions && typeof parsed.answeredQuestions === 'object'
          ? parsed.answeredQuestions
          : {},
      lastReadWeek:
        typeof parsed.lastReadWeek === 'number' &&
        parsed.lastReadWeek >= 1 &&
        parsed.lastReadWeek <= 12
          ? parsed.lastReadWeek
          : 1,
    };
  } catch {
    return { completedWeeks: [], answeredQuestions: {}, lastReadWeek: 1 };
  }
}

export default function App() {
  const [activeView, setActiveView] = useState<AppView>('overview');
  const [progress, setProgress] = useState<StoredProgress>(loadInitialProgress);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [progress]);

  const handleNavigate = useCallback((view: AppView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenChapter = useCallback((week: number) => {
    setProgress((prev) => ({ ...prev, lastReadWeek: week }));
    setActiveView('chapter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggleComplete = useCallback((week: number) => {
    setProgress((prev) => {
      const exists = prev.completedWeeks.includes(week);
      const nextCompleted = exists
        ? prev.completedWeeks.filter((w) => w !== week)
        : [...prev.completedWeeks, week].sort((a, b) => a - b);
      return { ...prev, completedWeeks: nextCompleted };
    });
  }, []);

  const handleSelectAnswer = useCallback((questionId: string, optionIndex: number) => {
    setProgress((prev) => ({
      ...prev,
      answeredQuestions: {
        ...prev.answeredQuestions,
        [questionId]: optionIndex,
      },
    }));
  }, []);

  const handleResetAnswer = useCallback((questionId: string) => {
    setProgress((prev) => {
      const next = { ...prev.answeredQuestions };
      delete next[questionId];
      return { ...prev, answeredQuestions: next };
    });
  }, []);

  const handleResetAllAnswers = useCallback(() => {
    setProgress((prev) => ({ ...prev, answeredQuestions: {} }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <TopBar activeView={activeView} onNavigate={handleNavigate} />

      <div className="flex-1">
        {activeView === 'overview' && (
          <HomeOverview
            completedWeeks={progress.completedWeeks}
            answeredQuestions={progress.answeredQuestions}
            lastReadWeek={progress.lastReadWeek}
            onOpenChapter={handleOpenChapter}
            onNavigate={handleNavigate}
          />
        )}

        {activeView === 'chapter' && (
          <ChapterReader
            currentWeek={progress.lastReadWeek}
            completedWeeks={progress.completedWeeks}
            answeredQuestions={progress.answeredQuestions}
            onSelectWeek={handleOpenChapter}
            onToggleComplete={handleToggleComplete}
            onSelectAnswer={handleSelectAnswer}
            onResetAnswer={handleResetAnswer}
          />
        )}

        {activeView === 'services' && (
          <ServiceGuideView onOpenChapter={handleOpenChapter} />
        )}

        {activeView === 'products' && (
          <ProductMapView onOpenChapter={handleOpenChapter} />
        )}

        {activeView === 'exam' && (
          <ExamPracticeView
            answeredQuestions={progress.answeredQuestions}
            onSelectAnswer={handleSelectAnswer}
            onResetAnswer={handleResetAnswer}
            onResetAllAnswers={handleResetAllAnswers}
          />
        )}

        {activeView === 'capstone' && (
          <CapstoneRevisionView
            onOpenChapter={handleOpenChapter}
            onNavigate={handleNavigate}
          />
        )}
      </div>

      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Safaricom AWS Certified AI Practitioner (AIF-C01) 12-Week Self-Study Textbook ·
            Illustrative learning scenarios only, not confirmed internal implementations.
          </p>
          <p>
            © 2026 Created and published by Ruth Moraa, Digital Care Touchpoints. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 font-medium text-slate-600">
            <button
              type="button"
              onClick={() => handleNavigate('overview')}
              className="hover:text-slate-950 cursor-pointer"
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('chapter')}
              className="hover:text-slate-950 cursor-pointer"
            >
              Chapters
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('services')}
              className="hover:text-slate-950 cursor-pointer"
            >
              Service Guide
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('products')}
              className="hover:text-slate-950 cursor-pointer"
            >
              Product Map
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('exam')}
              className="hover:text-slate-950 cursor-pointer"
            >
              Exam Practice
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
