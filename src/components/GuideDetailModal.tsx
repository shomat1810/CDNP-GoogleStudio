import React, { useState } from 'react';
import { X, CheckSquare, Square, AlertCircle, LifeBuoy } from 'lucide-react';
import { SelfHelpGuide } from '../types';

interface GuideDetailModalProps {
  guide: SelfHelpGuide | null;
  onClose: () => void;
  onOpenGetHelp: () => void;
}

export const GuideDetailModal: React.FC<GuideDetailModalProps> = ({
  guide,
  onClose,
  onOpenGetHelp,
}) => {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  if (!guide) return null;

  const toggleStep = (num: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / guide.steps.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-detail-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs text-blue-300 font-semibold mb-2">
            <span className="px-2 py-0.5 rounded bg-blue-900/80 border border-blue-700 text-blue-200 uppercase tracking-wider text-[11px]">
              {guide.category}
            </span>
            <span>• ⏱ {guide.timeToComplete}</span>
          </div>

          <h2 id="guide-detail-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight pr-8">
            {guide.title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
            {guide.description}
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
          <span>Checklist Progress: {completedCount} of {guide.steps.length} steps ({progressPercent}%)</span>
          <div className="w-24 bg-slate-200 rounded h-1.5 overflow-hidden">
            <div
              className="bg-blue-700 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Steps List */}
        <div className="p-6 sm:p-7 space-y-4 max-h-[60vh] overflow-y-auto">
          {guide.steps.map((step) => {
            const isDone = !!completedSteps[step.number];
            return (
              <div
                key={step.number}
                onClick={() => toggleStep(step.number)}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  isDone
                    ? 'bg-slate-50 border-slate-300'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    className="mt-0.5 text-blue-700 focus:outline-none"
                    aria-label={`Mark step ${step.number} as complete`}
                  >
                    {isDone ? (
                      <CheckSquare className="w-5 h-5 text-blue-700" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        Step {step.number}
                      </span>
                      <h4 className={`text-sm font-bold ${
                        isDone ? 'text-slate-400 line-through' : 'text-slate-900'
                      }`}>
                        {step.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {step.detail}
                    </p>

                    {step.warning && (
                      <div className="mt-2.5 p-2.5 bg-amber-50 rounded-md border border-amber-200 flex items-start gap-2 text-xs text-amber-900 font-medium">
                        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{step.warning}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600">
            Need someone to guide you step-by-step?
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenGetHelp();
              }}
              className="flex-1 sm:flex-none px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors"
            >
              <LifeBuoy className="w-3.5 h-3.5 text-blue-200" />
              <span>Request 1-on-1 Help</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-md transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
