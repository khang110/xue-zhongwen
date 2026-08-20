/** Chuẩn hoá chuỗi để so sánh đáp án: bỏ khoảng trắng thừa, dấu câu tiếng Trung phổ biến. */
function normalize(text: string): string {
  return text
    .trim()
    .replace(/\s+/g, '')
    .replace(/[，。！？、；：「」『』（）,.!?;:()]/g, '')
}

/** So khớp câu trả lời của người dùng với danh sách đáp án chấp nhận được. */
function isCorrectAnswer(userInput: string, acceptedAnswers: string[]): boolean {
  const input = normalize(userInput)
  if (!input) return false
  return acceptedAnswers.some((answer) => normalize(answer) === input)
}

export function useExerciseChecker() {
  return { normalize, isCorrectAnswer }
}
