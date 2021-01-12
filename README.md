# my-react-template

- react
- react-router-dom
- react-redux
- redux
- reselect
- styled-components
- formik
- json-server

```
# ボイラープレートをクローンする
$ git clone git@github.com:osekiharn/my-react-template.git <PROJECT NAME>
$ cd <PROJECT NAME>

# コミット履歴を削除する
$ rm -rf .git

# 現在のコンテンツからリポジトリを再作成する
$ git init
$ git add .
$ git commit -m "initial commit"

# GitHub のリモートリポジトリにプッシュして確実に履歴を上書きする
$ git remote add origin git@github.com:osekiharn/<PROJECT NAME>.git
$ git push -u --force origin master

# 依存モジュールをインスールする
$ yarn

# モックサーバーを起動する
$ yarn mock:protected

# アプリケーションを起動する
$ yarn start
```
