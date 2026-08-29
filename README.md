# 當代中文課程 3 — Sổ tay từ vựng & ngữ pháp

Website học từ vựng và ngữ pháp cho giáo trình *當代中文課程 3* (A Course in Contemporary Chinese, Book 3 — MTC/NTNU), hướng đến trình độ TOCFL B1. Giao diện tiếng Việt, dùng ôn tập theo phương pháp lặp lại ngắt quãng (spaced repetition), tự động liên kết các từ dùng chung chữ Hán, và luyện viết thứ tự nét chữ Hán.

## Cài đặt

```bash
npm install
```

App hỗ trợ nhiều tài khoản, mỗi tài khoản có dữ liệu học tập (SRS, streak) riêng. Đăng nhập bằng email/mật khẩu (tự đăng ký) hoặc Google OAuth (tuỳ chọn). Tạo file `.env` (xem mẫu ở `.env.example`) với các biến:

- `NUXT_OAUTH_GOOGLE_CLIENT_ID`, `NUXT_OAUTH_GOOGLE_CLIENT_SECRET` — tuỳ chọn, chỉ cần nếu muốn bật đăng nhập Google. Tạo tại [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) → **Create Credentials → OAuth client ID → Web application**. Thêm **Authorized redirect URI**:
  - Local dev: `http://localhost:3000/api/auth/google`
  - Production: `https://<domain-thật>/api/auth/google`
  (Lần đầu tạo OAuth client, Google có thể yêu cầu cấu hình "OAuth consent screen" trước — chọn loại **External**, điền tên app, thêm chính email của bạn vào mục Test users nếu app ở chế độ Testing.)
- `NUXT_SESSION_PASSWORD` — chuỗi bí mật ≥32 ký tự để mã hoá cookie phiên đăng nhập:
  ```bash
  node -e "console.log(require('node:crypto').randomBytes(24).toString('hex'))"
  ```

## Chạy dev server

```bash
npm run dev
```

Mở `http://localhost:3000`, đăng ký tài khoản bằng email/mật khẩu hoặc đăng nhập bằng Google.

## Kiểm thử

```bash
npm run test          # vitest (thuật toán SRS, liên kết từ vựng)
npx nuxi typecheck    # kiểm tra kiểu TypeScript toàn dự án
npx eslint .           # lint
```

Build production và hướng dẫn triển khai lên VPS: xem [deploy/README.md](deploy/README.md).

## Cấu trúc nội dung

- `data/lessons/lesson-0N.ts` — dữ liệu từng bài (hội thoại, từ vựng, ngữ pháp, bài tập). Bài 1–3 đã có đầy đủ; Bài 4–12 còn là stub (`status: 'coming-soon'`) trong `data/lessons/index.ts`, thêm bài mới bằng cách tạo file tương tự và import vào đó — không cần sửa code giao diện.
- `types/` — định nghĩa dữ liệu (Lesson, VocabItem, GrammarPoint, Exercise, SRS).
- `shared/utils/srsAlgorithm.ts` — thuật toán SM-2 rút gọn, chạy ở server (`server/api/srs/grade.post.ts`).
