if (!conn) {
    console.log(location.host);
    if (location.host == 'localhost:8080') {
      jsforce.browser.init({
        clientId: '<your clientId>',
        redirectUri: 'http://localhost:8080/',
        proxyUrl: 'http://localhost:3123/proxy/'
      });
    } else {
      jsforce.browser.init({
        clientId: '<your clientId>',
        redirectUri: 'https://<your heroku app>.herokuapp.com/',
        proxyUrl: 'https://<your heroku app>.herokuapp.com/proxy/'
      });
    }

    var conn = jsforce.browser.connection;
}
