import HanziWriter from 'hanzi-writer'
import type { HanziWriterOptions } from 'hanzi-writer'

/** Bảng màu mực/triện đồng bộ với theme của app (xem tailwind.config.ts: ink/seal/jade). */
const DEFAULT_OPTIONS: Partial<HanziWriterOptions> = {
  padding: 12,
  showOutline: true,
  strokeAnimationSpeed: 1,
  delayBetweenStrokes: 250,
  strokeColor: '#26211c',
  outlineColor: '#dcd5c2',
  highlightColor: '#b23a2e',
  drawingColor: '#345245'
}

export function useHanziWriter() {
  function create(target: HTMLElement, character: string, size = 200, options?: Partial<HanziWriterOptions>) {
    return HanziWriter.create(target, character, {
      width: size,
      height: size,
      ...DEFAULT_OPTIONS,
      ...options
    })
  }

  return { create }
}
