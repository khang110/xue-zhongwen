import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Sắc đỏ triện son (印泥) - điểm nhấn chính, dùng thưa
        seal: {
          50: '#fdf2f0',
          100: '#fbe0db',
          200: '#f4bcb1',
          300: '#e8917e',
          400: '#d1604a',
          500: '#b23a2e',
          600: '#962c22',
          700: '#7a2620',
          800: '#5e1e1a',
          900: '#3f1512'
        },
        // Sắc ngọc bích - điểm nhấn phụ (trạng thái đúng/thành công)
        jade: {
          50: '#eef4f1',
          100: '#d7e6de',
          200: '#aecbbc',
          300: '#7ead97',
          400: '#578f75',
          500: '#3f6355',
          600: '#345245',
          700: '#2a4238',
          800: '#20332b',
          900: '#16241f'
        },
        // Giấy dó/giấy tuyên - nền
        paper: {
          DEFAULT: '#f3f1ea',
          deep: '#e8e3d5',
          line: '#dcd5c2'
        },
        // Mực đen ấm - chữ, đường viền
        ink: {
          50: '#f6f5f2',
          100: '#e9e6de',
          200: '#cec8ba',
          300: '#a89f8b',
          400: '#7d7364',
          500: '#5c5346',
          600: '#463f36',
          700: '#362f28',
          800: '#26211c',
          900: '#181511'
        }
      },
      fontFamily: {
        // Chữ Hán nổi bật - font Song/Ming cổ điển, khác biệt với Noto Sans mặc định
        hanzi: ['"Noto Serif TC"', '"Noto Sans TC"', 'serif'],
        // Chữ Việt / giao diện
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        // Pinyin, nhãn phụ, dữ liệu
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      }
    }
  }
}
