function login() {
  jsforce.browser.login();
  jsforce.browser.on('connect', function(){
      location.href = "/home.html";
  });
  return false;
}

function logout() {
  jsforce.browser.logout();
  location.href = "/";
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