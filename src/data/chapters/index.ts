import { CHAPTERS_1_TO_4 } from './chapters1to4';
import { CHAPTERS_5_TO_8 } from './chapters5to8';
import { CHAPTERS_9_TO_12 } from './chapters9to12';
import { Chapter, ExamQuestion } from '../../types/textbook';

export const ALL_CHAPTERS: Chapter[] = [
  ...CHAPTERS_1_TO_4,
  ...CHAPTERS_5_TO_8,
  ...CHAPTERS_9_TO_12,
];

export const ALL_EXAM_QUESTIONS: ExamQuestion[] = ALL_CHAPTERS.flatMap(
  (chapter) => chapter.questions,
);

export function getChapterByWeek(week: number): Chapter {
  return ALL_CHAPTERS.find((c) => c.week === week) ?? ALL_CHAPTERS[0];
}
