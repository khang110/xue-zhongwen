# 當代中文課程 3 — Sổ tay từ vựng & ngữ pháp

Website học từ vựng và ngữ pháp cho giáo trình *當代中文課程 3* (A Course in Contemporary Chinese, Book 3 — MTC/NTNU), hướng đến trình độ TOCFL B1. Giao diện tiếng Việt, dùng ôn tập theo phương pháp lặp lại ngắt quãng (spaced repetition), tự động liên kết các từ dùng chung chữ Hán, và luyện viết thứ tự nét chữ Hán.

## Cài đặt

```bash
npm install
```

Tạo file `.env` (xem mẫu ở `.env.example`) với 3 biến:

- `NUXT_AUTH_PASSWORD_HASH`, `NUXT_AUTH_PASSWORD_SALT` — mật khẩu đăng nhập (băm bằng scrypt). Tạo mới bằng:
  ```bash
  node -e "const {scryptSync,randomBytes}=require('node:crypto');const s=randomBytes(16).toString('hex');console.log('NUXT_AUTH_PASSWORD_SALT='+s);console.log('NUXT_AUTH_PASSWORD_HASH='+scryptSync('MAT_KHAU_MOI',s,64).toString('hex'))"
  ```
- `NUXT_SESSION_PASSWORD` — chuỗi bí mật ≥32 ký tự để mã hoá cookie phiên đăng nhập:
  ```bash
  node -e "console.log(require('node:crypto').randomBytes(24).toString('hex'))"
  ```

## Chạy dev server

```bash
npm run dev
```

Mở `http://localhost:3000`, đăng nhập bằng mật khẩu đã cấu hình.

## Kiểm thử

```bash
npm run test          # vitest (thuật toán SRS, liên kết từ vựng)
npx nuxi typecheck    # kiểm tra kiểu TypeScript toàn dự án
npx eslint .           # lint
```

Build production: xem [deploy/README.md](deploy/README.md).

## Triển khai lên VPS miễn phí (Google Cloud Always Free)

Vì dùng SQLite trên đĩa cục bộ, app cần chạy trên một máy chủ có ổ đĩa bền vững — không hợp với nền tảng serverless (Vercel/Netlify free) vì ổ đĩa ở đó tạm thời, dữ liệu SRS có thể mất bất cứ lúc nào. Google Cloud có gói **Always Free** cho 1 VM `e2-micro`, chạy 24/7, miễn phí vĩnh viễn (cần thẻ để xác minh danh tính, không bị trừ tiền nếu không tự nâng cấp). Khác với Oracle, GCP không khoá "home region" theo tài khoản nên không gặp lỗi tương tự.

### 0. Cài & đăng nhập gcloud CLI (máy local)

1. Cài Google Cloud CLI: tải tại [cloud.google.com/sdk](https://cloud.google.com/sdk/docs/install), hoặc `winget install Google.CloudSDK`.
2. `gcloud init` — đăng nhập tài khoản Google.
3. **Trên Windows**: mặc định `gcloud compute ssh`/`scp` dùng PuTTY (plink), sẽ hỏi xác nhận "Store key in cache?" một cách tương tác gây treo khi chạy không tương tác. Set biến môi trường sau để chuyển sang OpenSSH có sẵn của Windows (không hỏi lại):
   ```powershell
   $env:CLOUDSDK_SSH_USE_OPENSSH = "true"
   ```
4. Kiểm tra billing account đang **mở** (`OPEN: True`) — Compute Engine bắt buộc phải có billing dù dùng free tier:
   ```bash
   gcloud billing accounts list
   ```
   Nếu chưa có, vào [console.cloud.google.com/billing](https://console.cloud.google.com/billing) để thêm phương thức thanh toán (không bị trừ tiền nếu không tự nâng cấp khỏi Always Free) — bước này phải tự làm trên trình duyệt vì cần nhập thông tin thẻ.

### 1. Tạo project + VM

```bash
# Tạo project riêng cho app (bỏ qua nếu dùng project có sẵn)
gcloud projects create hoc-tieng-trung-b3 --name="Hoc Tieng Trung B3"
gcloud config set project hoc-tieng-trung-b3

# Gắn billing account đang mở vào project (lấy ACCOUNT_ID từ bước 0.4)
gcloud billing projects link hoc-tieng-trung-b3 --billing-account=<BILLING_ACCOUNT_ID>

gcloud services enable compute.googleapis.com
```

1. Tạo VM (region miễn phí chỉ có `us-west1`, `us-central1`, `us-east1`):
   ```bash
   gcloud compute instances create hoc-tieng-trung \
     --zone=us-central1-a \
     --machine-type=e2-micro \
     --image-family=ubuntu-2204-lts \
     --image-project=ubuntu-os-cloud \
     --boot-disk-size=30GB \
     --boot-disk-type=pd-standard \
     --tags=http-server,https-server
   ```
2. Mở port 80/443 (chỉ cần làm 1 lần cho cả project):
   ```bash
   gcloud compute firewall-rules create allow-http --allow=tcp:80 --target-tags=http-server
   gcloud compute firewall-rules create allow-https --allow=tcp:443 --target-tags=https-server
   ```
3. Lấy Public IP:
   ```bash
   gcloud compute instances describe hoc-tieng-trung --zone=us-central1-a \
     --format='get(networkInterfaces[0].accessConfigs[0].natIP)'
   ```

### 2. Cài đặt trên VM

```bash
gcloud compute ssh hoc-tieng-trung --zone=us-central1-a
```

(lệnh này tự tạo SSH key và kết nối, không cần quản lý file key thủ công như Oracle). Trong phiên SSH:

```bash
# Cài Node.js 24.x
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs

# Cài Caddy (reverse proxy + tự động HTTPS)
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install -y caddy

# Tạo user riêng để chạy app (không dùng root)
sudo useradd -r -m -d /opt/hoc-tieng-trung-b3 -s /usr/sbin/nologin nuxtapp

# e2-micro chỉ có 1GB RAM — tạo swap 2GB để "npm run build" (Vite) không bị OOM
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

exit
```

### 3. Đưa code lên VM và build

```bash
# Từ máy local: đóng gói code, bỏ qua node_modules/build output/secrets/PDF giáo trình (nặng, không cần để chạy app)
tar --exclude=node_modules --exclude=.output --exclude=.nuxt --exclude=.git --exclude=.env --exclude='*.pdf' --exclude=.claude -czf app.tar.gz .

gcloud compute scp app.tar.gz hoc-tieng-trung:/tmp/app.tar.gz --zone=us-central1-a
gcloud compute ssh hoc-tieng-trung --zone=us-central1-a

sudo mkdir -p /opt/hoc-tieng-trung-b3
sudo tar -xzf /tmp/app.tar.gz -C /opt/hoc-tieng-trung-b3
sudo chown -R nuxtapp:nuxtapp /opt/hoc-tieng-trung-b3
cd /opt/hoc-tieng-trung-b3
sudo -u nuxtapp npm install
sudo -u nuxtapp npm run build
exit
```

Tạo `.env` production — cách nhanh nhất là copy thẳng `.env` local đang dùng (giữ nguyên mật khẩu đăng nhập, không cần sinh lại hash):

```bash
# Từ máy local
gcloud compute scp .env hoc-tieng-trung:/tmp/app.env --zone=us-central1-a
gcloud compute ssh hoc-tieng-trung --zone=us-central1-a --command="sudo mv /tmp/app.env /opt/hoc-tieng-trung-b3/.env && sudo chown nuxtapp:nuxtapp /opt/hoc-tieng-trung-b3/.env && sudo chmod 600 /opt/hoc-tieng-trung-b3/.env"
```

(hoặc `sudo -u nuxtapp nano /opt/hoc-tieng-trung-b3/.env` để gõ tay giá trị mới nếu muốn mật khẩu riêng cho bản deploy — xem mục Cài đặt ở trên để sinh giá trị).

### 4. Chạy app như một service (tự khởi động lại, tự chạy khi reboot)

```bash
sudo cp deploy/nuxt-app.service /etc/systemd/system/nuxt-app.service
sudo systemctl daemon-reload
sudo systemctl enable --now nuxt-app
sudo systemctl status nuxt-app   # kiểm tra đã chạy
```

### 5. Cấu hình HTTPS qua Caddy

Nếu chưa có domain riêng, dùng dịch vụ miễn phí như [DuckDNS](https://www.duckdns.org) để có một subdomain trỏ về Public IP của VM, hoặc dùng `<PUBLIC_IP>.nip.io` (tự phân giải về chính IP đó, không cần cấu hình DNS).

```bash
sudo nano /etc/caddy/Caddyfile   # sửa theo mẫu ở deploy/Caddyfile, thay domain thật vào
sudo systemctl reload caddy
```

Caddy sẽ tự xin chứng chỉ HTTPS (Let's Encrypt) cho domain đó. Sau bước này, mở `https://<domain>` trên điện thoại — truy cập được từ bất kỳ đâu có mạng.

### 6. Cập nhật code sau này

Vì code đã push lên GitHub, cách nhanh nhất là cho VM tự `git pull` thay vì đóng gói/scp lại từ đầu:

```bash
# Một lần duy nhất: chuyển /opt/hoc-tieng-trung-b3 (đang là thư mục giải nén từ tar) thành git clone thật
gcloud compute ssh hoc-tieng-trung --zone=us-central1-a --command="cd /opt/hoc-tieng-trung-b3 && sudo -u nuxtapp git init -b master && sudo -u nuxtapp git remote add origin https://github.com/khang110/xue-zhongwen.git && sudo -u nuxtapp git fetch origin master && sudo -u nuxtapp git reset --hard origin/master"
```

Từ lần sau, mỗi khi sửa code xong, chỉ cần:

```bash
git push                    # đẩy code mới lên GitHub (làm ở máy local như bình thường)
.\deploy\redeploy.ps1       # VM tự pull + npm install + npm run build + restart service
```

`deploy/redeploy.ps1` chỉ là wrapper gọi `deploy/update.sh` trên VM qua SSH — có thể chạy tay lệnh `gcloud compute ssh ... --command="bash /opt/hoc-tieng-trung-b3/deploy/update.sh"` nếu không dùng PowerShell.

### Trạng thái triển khai hiện tại

- **URL**: https://136.65.122.242.nip.io/ (dùng `<PUBLIC_IP>.nip.io` — không cần domain riêng, tự phân giải về IP)
- **Project GCP**: `hoc-tieng-trung-b3`
- **VM**: `hoc-tieng-trung`, zone `us-central1-a`, machine type `e2-micro`, IP `136.65.122.242`
- Mật khẩu đăng nhập giống hệt `.env` local (đã copy trực tiếp sang VM).
- Nếu VM bị xoá/tạo lại, IP public sẽ đổi → phải cập nhật lại domain trong `/etc/caddy/Caddyfile` trên VM và đổi link ở mục này.

## Cấu trúc nội dung

- `data/lessons/lesson-0N.ts` — dữ liệu từng bài (hội thoại, từ vựng, ngữ pháp, bài tập). Bài 1–3 đã có đầy đủ; Bài 4–12 còn là stub (`status: 'coming-soon'`) trong `data/lessons/index.ts`, thêm bài mới bằng cách tạo file tương tự và import vào đó — không cần sửa code giao diện.
- `types/` — định nghĩa dữ liệu (Lesson, VocabItem, GrammarPoint, Exercise, SRS).
- `shared/utils/srsAlgorithm.ts` — thuật toán SM-2 rút gọn, chạy ở server (`server/api/srs/grade.post.ts`).
