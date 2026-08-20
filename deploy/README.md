# Build production

```bash
npm run build
node .output/server/index.mjs
```

Tiến độ ôn tập (SRS) lưu trong SQLite tại `server/database/app.db` (tự tạo khi chạy lần đầu, không đưa vào git) — đây là nguồn dữ liệu chung cho mọi thiết bị đăng nhập cùng mật khẩu, nên khi triển khai thật cần host trên máy có ổ đĩa bền vững (không phải môi trường serverless tạm thời).
