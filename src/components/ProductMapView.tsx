import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SAFARICOM_PRODUCT_MAPPINGS } from '../data/productMappings';
import { ProductMappingEntry } from '../types/textbook';

interface ProductMapViewProps {
  onOpenChapter: (week: number) => void;
}

const PRODUCT_CATEGORIES: ('All' | ProductMappingEntry['category'])[] = [
  'All',
  'M-PESA & Financial Services',
  'Mobile & Connectivity',
  'Customer Care & Digital Channels',
  'Enterprise & Business Services',
];

export const ProductMapView: React.FC<ProductMapViewProps> = ({ onOpenChapter }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProductMappingEntry['category']>(
    'All',
  );
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAFARICOM_PRODUCT_MAPPINGS.filter((item) => {
      const catOk = selectedCategory === 'All' || item.category === selectedCategory;
      const qOk =
        !q ||
        item.safaricomProduct.toLowerCase().includes(q) ||
        item.primaryAwsService.toLowerCase().includes(q) ||
        item.illustrativeUseCase.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [selectedCategory, query]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <section className="space-y-3">
        <p className="text-xs font-semibold text-emerald-800">
          Product-to-Service Reference · Illustrative Learning Scenarios Only
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
          Safaricom Product-to-AWS-Service Map
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Connect every familiar Safaricom product—from Lipa na M-PESA and Buy Goods Till Numbers to
          Home Fibre, Zuri, *100, and Daraja API—to the exact AWS AI services taught in this
          textbook. These mappings are illustrative learning scenarios, not statements about
          Safaricom’s internal systems.
        </p>
      </section>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {PRODUCT_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-emerald-700 text-white'
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter product or AWS service..."
            aria-label="Filter Safaricom product mappings"
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-700"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-2">
          <p className="text-base font-semibold text-slate-900">No mappings match your filter</p>
          <p className="text-sm text-slate-600">
            Clear your search input or select &ldquo;All&rdquo; categories above.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700">
                  <th className="px-5 py-3.5">Safaricom Product</th>
                  <th className="px-5 py-3.5">Illustrative Learning Use Case</th>
                  <th className="px-5 py-3.5">Primary AWS Service</th>
                  <th className="px-5 py-3.5">Why This Service Fits</th>
                  <th className="px-5 py-3.5 text-right">Chapter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/70 align-top">
                    <td className="px-5 py-4 min-w-[200px]">
                      <p className="font-bold text-slate-950">{row.safaricomProduct}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{row.category}</p>
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-700 leading-relaxed min-w-[240px]">
                      {row.illustrativeUseCase}
                    </td>
                    <td className="px-5 py-4 min-w-[190px]">
                      <p className="font-semibold text-emerald-800">{row.primaryAwsService}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Supporting: {row.supportingAwsServices.join(', ')}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-700 leading-relaxed min-w-[240px]">
                      <p>{row.whyThisServiceFits}</p>
                      <p className="text-slate-500 mt-1">{row.examDomain}</p>
                    </td>
                    <td className="px-5 py-4 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => onOpenChapter(row.relevantWeek)}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer tabular-nums"
                      >
                        Week {row.relevantWeek}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
};
