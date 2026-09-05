import type { Lesson } from '../../../types/lesson'
import { listeningExercises } from './listening'
import { lesson01 } from './lesson-01'
import { lesson02 } from './lesson-02'
import { lesson03 } from './lesson-03'
import { lesson04 } from './lesson-04'
import { lesson05 } from './lesson-05'
import { lesson06 } from './lesson-06'
import { lesson07 } from './lesson-07'
import { lesson08 } from './lesson-08'
import { lesson09 } from './lesson-09'
import { lesson10 } from './lesson-10'
import { lesson11 } from './lesson-11'
import { lesson12 } from './lesson-12'

const rawLessons: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12
]

export const lessons: Lesson[] = rawLessons.map((lesson) => ({
  ...lesson,
  workbookExercises: [...lesson.workbookExercises, ...(listeningExercises[lesson.id] ?? [])]
}))

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id)
}

export function getAllVocab() {
  return lessons.flatMap((lesson) => lesson.vocab)
}
