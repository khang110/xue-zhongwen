import type { ListeningExercise } from '../../../../types/exercise'
import { listeningL1 } from './lesson-01'
import { listeningL2 } from './lesson-02'
import { listeningL3 } from './lesson-03'
import { listeningL4 } from './lesson-04'
import { listeningL5 } from './lesson-05'
import { listeningL6 } from './lesson-06'
import { listeningL7 } from './lesson-07'
import { listeningL8 } from './lesson-08'
import { listeningL9 } from './lesson-09'
import { listeningL10 } from './lesson-10'
import { listeningL11 } from './lesson-11'
import { listeningL12 } from './lesson-12'

/**
 * Bài tập nghe hiểu (作業本 I. Listening and Response) tách riêng khỏi các file
 * lesson-NN.ts để giữ file bài học gọn và dễ soát lại phần lời thoại.
 * Audio là các file mp3 trong public/audio/workbook/ (theo dõi qua Git LFS).
 */
export const listeningExercises: Record<string, ListeningExercise[]> = {
  L1: listeningL1,
  L2: listeningL2,
  L3: listeningL3,
  L4: listeningL4,
  L5: listeningL5,
  L6: listeningL6,
  L7: listeningL7,
  L8: listeningL8,
  L9: listeningL9,
  L10: listeningL10,
  L11: listeningL11,
  L12: listeningL12
}
