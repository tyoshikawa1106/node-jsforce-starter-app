function login() {
  jsforce.browser.login();
  jsforce.browser.on('connect', function(){
      location.href = "/home.html";
  });
  return false;
}

function logout() {
  conn.logout();
  jsforce.browser.on('disconnect', function(){
      location.href = "/";
  });
  return false;
}

function checkLogin() {
  console.log(conn.userInfo);
  if (!conn.userInfo) {
    location.href="/";
    return false;
  }
  return true;
}