# 當代中文課程 3 — Sổ tay từ vựng & ngữ pháp

Ứng dụng web (Nuxt 4) để học từ vựng, ngữ pháp và luyện bài tập cho giáo trình *當代中文課程 3* (A Course in Contemporary Chinese, Book 3 — MTC/NTNU), hướng đến trình độ **TOCFL B1**. Giao diện tiếng Việt.

- **12 bài học đầy đủ**: hội thoại, từ vựng, điểm ngữ pháp và bài tập sách bài tập (作業本).
- **Ôn tập lặp lại ngắt quãng (SRS)**: thuật toán SM-2 rút gọn với 4 mức đánh giá (Again / Hard / Good / Easy), hàng đợi ôn tập mỗi ngày gồm thẻ đến hạn + một lô thẻ mới có giới hạn.
- **Bài tập nghe**: mỗi bài có phần luyện nghe với audio (`public/audio/workbook/*.mp3`, lưu qua Git LFS).
- **Luyện viết chữ Hán**: thứ tự nét chữ (hanzi-writer).
- **Liên kết từ vựng chéo bài**: tự động gom các từ dùng chung một chữ Hán, bất kể nằm ở bài nào.
- **Nhiều tài khoản**: tự đăng ký bằng email/mật khẩu hoặc đăng nhập Google OAuth; mỗi tài khoản có dữ liệu học tập (SRS, streak, tiến độ bài tập) riêng biệt.
- **Chuỗi ngày học (streak)** với cơ chế "đóng băng" (freeze) để không mất chuỗi khi nghỉ.
- **Tiến độ bài tập lưu ở server**: làm dở trên máy này, mở máy khác vẫn thấy.
- Bật/tắt hiển thị pinyin, nghĩa, chữ giản thể/phồn thể; đọc to (text-to-speech); tự chuyển câu khi trả lời đúng.

## Yêu cầu

- **Node.js 24** (dev được kiểm thử trên v24.x) — dùng module tích hợp sẵn `node:sqlite`, không cần cài driver SQLite ngoài.
- npm.

## Cài đặt

```bash
npm install
```

Tạo file `.env` ở thư mục gốc (xem mẫu `.env.example`):

- `NUXT_SESSION_PASSWORD` — **bắt buộc**. Chuỗi bí mật ≥ 32 ký tự để mã hoá cookie phiên đăng nhập. Tạo nhanh:
  ```bash
  node -e "console.log(require('node:crypto').randomBytes(24).toString('hex'))"
  ```
- `NUXT_OAUTH_GOOGLE_CLIENT_ID`, `NUXT_OAUTH_GOOGLE_CLIENT_SECRET` — **tuỳ chọn**, chỉ cần nếu muốn bật nút "Đăng nhập bằng Google". Không đặt thì vẫn dùng được đăng ký email/mật khẩu bình thường.

  Tạo tại [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) → **Create Credentials → OAuth client ID → Web application**. Thêm **Authorized redirect URI**:
  - Local dev: `http://localhost:3000/api/auth/google`
  - Production: `https://<domain-thật>/api/auth/google`

  (Lần đầu tạo OAuth client, Google có thể bắt cấu hình "OAuth consent screen" trước — chọn loại **External**, điền tên app, thêm email của bạn vào Test users nếu app còn ở chế độ Testing.)

Đăng ký là mở — không có allowlist. Tài khoản Google được tự động liên kết với tài khoản email/mật khẩu sẵn có nếu trùng email đã xác minh.

## Chạy dev

```bash
npm run dev          # http://localhost:3000
```

Mở trang, đăng ký bằng email/mật khẩu hoặc đăng nhập Google. Mọi route đều yêu cầu đăng nhập (trừ `/login`).

## Kiểm thử & chất lượng code

```bash
npm run test          # vitest: thuật toán SRS, streak, liên kết từ vựng
npm run test:watch    # vitest ở chế độ watch
npx vitest run path/to/file.spec.ts   # chạy một file test
npx nuxi typecheck    # kiểm tra kiểu TypeScript toàn dự án
npx eslint .           # lint
```

## Cấu trúc dự án

**Bài học là dữ liệu, không phải CMS.** Mỗi bài là một module TS thuần ở `app/data/lessons/lesson-NN.ts` (hội thoại, từ vựng, ngữ pháp, bài tập), gộp lại trong `app/data/lessons/index.ts`. Bài tập nghe tách riêng ở `app/data/lessons/listening/` và được trộn vào từng bài khi build danh sách. Thêm bài mới = tạo file `lesson-NN.ts` + import vào `index.ts`, không cần đụng code giao diện. Kiểu dữ liệu bài học nằm ở `types/` (`lesson.ts`, `vocab.ts`, `grammar.ts`, `exercise.ts`) — đây là hợp đồng mà các file dữ liệu phải thoả.

**SRS tách phần logic thuần và phần lưu trữ.** `shared/utils/srsAlgorithm.ts` là bản cài SM-2 rút gọn, không có side-effect, được cả server route lẫn test dùng chung. **Server là nguồn dữ liệu duy nhất** cho tiến độ ôn tập:

- `server/api/srs/*`, `server/api/streak/*`, `server/api/workbook/*` — API, lưu vào SQLite qua `server/database/connection.ts` (module `node:sqlite`, một file `server/database/app.db`, **không đưa vào git**).
- Mọi bảng SRS/streak/bài tập đều khoá theo `user_id` (`server/utils/srsRepository.ts`, `streakRepository.ts`, `workbookRepository.ts`) — route lấy id từ `requireUserSession(event)` nên dữ liệu từng tài khoản độc lập.
- Frontend không tự tính trạng thái SRS: `app/composables/useSrsStorage.ts` chỉ là lớp `$fetch` mỏng bọc API; `useDailyReview.ts` dựng hàng đợi phiên ôn từ đó. Trạng thái phiên trên máy là tạm thời, việc chấm điểm luôn round-trip qua server để đồng bộ đa thiết bị.

**Xác thực.** `nuxt-auth-utils` quản lý cookie phiên cho hai lối đăng nhập, cả hai cùng trỏ về một dòng trong bảng `users` (`server/utils/userRepository.ts`): Google OAuth (`server/api/auth/google.get.ts`) và email/mật khẩu (`register.post.ts`, `login.post.ts`, băm bằng scrypt của `node:crypto` trong `server/utils/password.ts`). `app/middleware/auth.global.ts` chuyển hướng mọi request chưa đăng nhập về `/login`.

**Liên kết từ vựng chéo bài.** `app/utils/vocabRelations.ts` dựng chỉ mục `chữ Hán -> VocabItem[]` trên **tất cả** bài đã nạp (`buildCharacterIndex`), dùng để hiện "từ liên quan" chia sẻ chữ Hán với từ đang xem.

**Bài tập.** `types/exercise.ts` định nghĩa union phân biệt (`multiple-choice`, `fill-blank`, `matching`, `dialogue-completion`, `composition`, nghe) theo từng mục sách bài tập. Mỗi loại có một component tương ứng ở `app/components/exercise/`, điều phối bởi `ExerciseWrapper.vue`.

**Alias đường dẫn.** `#shared` → `shared/` (logic thuần dùng chéo ranh giới như thuật toán SRS); `~` → `app/`. Cấu hình trong `vitest.config.ts` lẫn mặc định của Nuxt, vì vitest chạy ngoài pipeline build của Nuxt.

### Các trang chính

| Route | Nội dung |
| --- | --- |
| `/` | Danh sách bài học |
| `/lessons/[id]` | Chi tiết bài: hội thoại, từ vựng, ngữ pháp, bài tập |
| `/review` | Phiên ôn tập SRS trong ngày |
| `/writing` | Luyện thứ tự nét chữ Hán |
| `/characters` | Tra cứu chữ Hán & từ liên quan |
| `/profile` | Hồ sơ, streak, thống kê |
| `/login` | Đăng ký / đăng nhập |

## Build & triển khai

```bash
npm run build
node .output/server/index.mjs
```

Vì dùng SQLite trên đĩa cục bộ, app cần chạy trên máy chủ có ổ đĩa bền vững (không hợp môi trường serverless tạm thời). Hướng dẫn triển khai đầy đủ lên VPS miễn phí (Google Cloud `e2-micro` + Caddy + systemd), bao gồm cả cấu hình Git LFS cho audio bài nghe: xem [`deploy/README.md`](deploy/README.md).

## Tài liệu nguồn

File PDF giáo trình và sách bài tập (`當代中文課程3 – 課本.pdf`, `當代中文課程3 – 作業本.pdf`) không đưa vào git (nặng, có bản quyền). Tự đặt vào thư mục gốc nếu cần đối chiếu khi soạn dữ liệu bài học.
