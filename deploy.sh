# git bash 輸入 sh deploy.sh 會自動執行這個檔案，用意:更新最新檔案到 gh-pages

#!/usr/bin/env sh

# 當發生錯誤時中止腳本
set -e

# 構建
npm run build

# cd 到構建輸出的目錄下
cd dist

# 部署到自定義域域名
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/recall131477/doublebrunch.git master:gh-pages
cd -