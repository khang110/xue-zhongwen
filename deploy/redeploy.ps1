# Cập nhật app trên VM: git push code trước, rồi chạy script này để pull + build + restart từ xa.
$env:CLOUDSDK_SSH_USE_OPENSSH = "true"
$gcloud = "$env:LOCALAPPDATA\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd"
& $gcloud compute ssh hoc-tieng-trung --project=hoc-tieng-trung-b3 --zone=us-central1-a --command="bash /opt/hoc-tieng-trung-b3/deploy/update.sh"
