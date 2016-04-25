# node-jsforce-starter-app
<img src="http://cdn-ak.f.st-hatena.com/images/fotolife/t/tyoshikawa1106/20160317/20160317005342.png" />
<a href="https://www.youtube.com/watch?v=9KiMGoyzbXQ">https://www.youtube.com/watch?v=9KiMGoyzbXQ</a>

## setup : node-jsforce-starter-app
node-jsforce-starter-appアプリを準備します
```
$ cd desktop
$ git clone git@github.com:tyoshikawa1106/node-jsforce-starter-app.git
$ cd node-jsforce-starter-app
$ npm install
```

## setup : jsforce-ajax-proxy
jsforce-ajax-proxyを準備します
```
$ cd desktop
$ git clone git@github.com:jsforce/jsforce-ajax-proxy.git
$ cd jsforce-ajax-proxy/
$ npm install
$ npm start
```

## setup : jsforce_config.js
publicフォルダ内にあるjavascriptsフォルダにjsforce_config.jsファイルが用意されています。Salesforceの接続アプリケーション設定でコンシューマーキーなどの情報を準備してからここにセットしてください。
<img src="http://cdn-ak.f.st-hatena.com/images/fotolife/t/tyoshikawa1106/20160418/20160418020717.png" />


## アプリの実行
ここまでの手順でアプリが実行できるようになっています。
node-jsforce-starter-appアプリをnpm startコマンドで起動してlocalhost:8080にアクセスすればログインページが表示されると思います。

## 参考リンク
JSforceサイトのURLはこちら。サンプルコードやドキュメント情報の確認ができます。  
https://jsforce.github.io/
