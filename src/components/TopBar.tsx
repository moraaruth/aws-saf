import React from 'react';

export type AppView =
  | 'overview'
  | 'chapter'
  | 'services'
  | 'products'
  | 'exam'
  | 'capstone';

interface TopBarProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
}

const NAV_ITEMS: { id: AppView; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'chapter', label: 'Chapters' },
  { id: 'services', label: 'Service Guide' },
  { id: 'products', label: 'Product Map' },
  { id: 'exam', label: 'Exam Practice' },
];

export const TopBar: React.FC<TopBarProps> = ({ activeView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
        <button
          type="button"
          onClick={() => onNavigate('overview')}
          className="text-left text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-700"
        >
          Safaricom AI Textbook
        </button>

        <nav
          aria-label="Primary textbook navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 focus-visible:outline-2 focus-visible:outline-emerald-700 ${
                  isActive
                    ? 'border-emerald-700 text-slate-950 font-semibold'
                    : 'border-transparent hover:text-slate-950 hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('capstone')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
              activeView === 'capstone'
                ? 'bg-slate-900 text-white'
                : 'bg-emerald-700 text-white hover:bg-emerald-800'
            }`}
          >
            Capstone &amp; Revision
          </button>
        </div>
      </div>

      {/* Mobile compact secondary navigation strip */}
      <nav
        aria-label="Mobile textbook navigation"
        className="md:hidden border-t border-slate-100 px-4 py-2 flex items-center gap-4 overflow-x-auto text-xs font-medium text-slate-600"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isActive ? 'text-emerald-800 font-semibold underline underline-offset-4' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
