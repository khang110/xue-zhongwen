let didInit = false

function pickBestZhVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const priority = ['zh-TW', 'zh-HK', 'zh-CN', 'zh']
  for (const lang of priority) {
    const match = voices.find((v) => v.lang.toLowerCase() === lang.toLowerCase())
    if (match) return match
  }
  return voices.find((v) => v.lang.toLowerCase().startsWith('zh')) ?? null
}

/**
 * Đọc to từ vựng/câu ví dụ tiếng Trung bằng Web Speech API của trình duyệt.
 * Ưu tiên giọng zh-TW (Đài Loan) > zh-HK > zh-CN > zh; nếu chỉ có giọng zh-CN,
 * gọi speak() với `simplifiedText` để đọc đúng vì một số giọng không đọc tốt chữ phồn thể.
 */
export function useSpeech() {
  const isSupported = useState<boolean>('speech-supported', () => false)
  const zhVoice = useState<SpeechSynthesisVoice | null>('speech-zh-voice', () => null)

  function loadVoices() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    const voices = window.speechSynthesis.getVoices()
    if (voices.length === 0) return
    zhVoice.value = pickBestZhVoice(voices)
    isSupported.value = zhVoice.value !== null
  }

  function init() {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      isSupported.value = false
      return
    }
    loadVoices()
    if (!didInit) {
      didInit = true
      window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    }
  }

  function speak(text: string, opts?: { rate?: number; simplifiedText?: string }) {
    if (typeof window === 'undefined' || !window.speechSynthesis || !zhVoice.value) return

    const voiceLang = zhVoice.value.lang.toLowerCase()
    const isMainlandVoice = voiceLang === 'zh-cn' || voiceLang === 'zh'
    const content = isMainlandVoice && opts?.simplifiedText ? opts.simplifiedText : text

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(content)
    utterance.voice = zhVoice.value
    utterance.lang = zhVoice.value.lang
    utterance.rate = opts?.rate ?? 0.85
    window.speechSynthesis.speak(utterance)
  }

  init()

  return { isSupported, zhVoice, speak }
}
