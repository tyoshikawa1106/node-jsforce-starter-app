console.log(location.host);
if (location.host == 'localhost:8080') {
    jsforce.browser.init({
      clientId: '3MVG9I1kFE5Iul2A_s3cQz8y7gXDok4z8Y0zaGRdTEmtj0_CLzKz5Yerankgp0UqVLy7mqPQw5Kf9f6pAni.r',
      redirectUri: 'http://localhost:8080/',
      proxyUrl: 'http://localhost:3123/proxy/'
    });
} else {
    jsforce.browser.init({
      clientId: '3MVG9I1kFE5Iul2A_s3cQz8y7gXDok4z8Y0zaGRdTEmtj0_CLzKz5Yerankgp0UqVLy7mqPQw5Kf9f6pAni.r',
      redirectUri: 'tyoshikawa1106-jsforce-starter/'
    });
}
var conn = jsforce.browser.connection;