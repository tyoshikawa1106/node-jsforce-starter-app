console.log(location.host);
if (location.host == 'localhost:8080') {
    jsforce.browser.init({
      clientId: '<接続アプリケーションコンシューマキー>',
      redirectUri: 'http://localhost:8080/',
      proxyUrl: 'http://localhost:3123/proxy/'
    });
} else {
    jsforce.browser.init({
      clientId: '<接続アプリケーションコンシューマキー>',
      redirectUri: '<Your Apps URL>'
    });
}
var conn = jsforce.browser.connection;
