#!/bin/bash
set -euo pipefail

APP_DIR=/opt/hoc-tieng-trung-b3

sudo -u nuxtapp git -C "$APP_DIR" pull --ff-only
sudo -u nuxtapp git -C "$APP_DIR" lfs pull || echo "⚠ git-lfs chưa cài — bỏ qua audio workbook (xem deploy/README.md mục 6)"
sudo -u nuxtapp npm --prefix "$APP_DIR" install
sudo -u nuxtapp npm --prefix "$APP_DIR" run build
sudo systemctl restart nuxt-app

echo "Deployed $(sudo -u nuxtapp git -C "$APP_DIR" rev-parse --short HEAD)"
