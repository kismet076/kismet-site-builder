/**
 * 估算阅读时长（分钟）
 * 中文按字符计（约 350 字/分钟），英文/数字按词计（约 200 词/分钟），
 * 取两者之和向上取整，最少 1 分钟。
 */
export function readingTime(text: string, cjkPerMinute = 350, wordsPerMinute = 200): number {
  const cjk = (text.match(/[一-鿿]/g) || []).length;
  const latin = text
    .replace(/[一-鿿]/g, ' ')
    .match(/[A-Za-z0-9一-鿿]+/g) || [];
  const words = latin.filter((w) => /[A-Za-z0-9]/.test(w)).length;
  const minutes = Math.ceil(cjk / cjkPerMinute + words / wordsPerMinute);
  return Math.max(1, minutes);
}
