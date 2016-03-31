(function() {
  "use strict";
  var app = angular.module("Controllers", ["Services"]);

  // 例外処理
  app.factory("$exceptionHandler", function () {
    return function (exception, cause) {
      console.log(exception.message);
      var msg = "画面の処理中にエラーが発生しました。" + "ご迷惑をおかけしております。";
      alert(msg);
    };
  });

  // AccountsCtrl
  app.controller("AccountsCtrl", ["$scope", "AccountServices", function($scope, helper) {
    try {
      // ログイン判定
      var isLogin = checkLogin();
      if (!isLogin) {
        return false;
      }

      $scope.accounts = [];
      // Get Accounts
      helper.getAccounts($scope);
    } catch (e) {
      throw e;
    }
  }]);

  // AccountCtrl
  app.controller("AccountCtrl", ["$scope", "AccountServices", "$routeParams", function($scope, helper, $routeParams) {
    try {
      // ログイン判定
      var isLogin = checkLogin();
      if (!isLogin) {
        return false;
      }
      
      $scope.account = {};
      // Get Account
      helper.getAccount($scope, $routeParams.id);
    } catch (e) {
      throw e;
    }
  }]);


})();