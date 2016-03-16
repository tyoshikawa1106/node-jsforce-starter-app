(function() {
  "use strict";
  var app = angular.module("Services", [])

  // 例外処理
  app.factory("$exceptionHandler", function () {
    return function (exception, cause) {
      console.log(exception.message);
      var msg = "画面の処理中にエラーが発生しました。" + "ご迷惑をおかけしております。";
      alert(msg);
    };
  });

  // AccountServices
  app.factory("AccountServices", ["$rootScope", function($rootScope) {
    // Get Account List
    function getAccounts(scope) {
      // JSforce Query
      var query = 'SELECT Id, Name, AccountNumber FROM Account ORDER BY Name ASC LIMIT 200';
      conn.query(query, function(err, res) {
        if (err) {
          alert(err);
        } else {
          scope.accounts = res.records;
        }
        $rootScope.$apply();
      });
    }

    // Get Account
    function getAccount(scope, accountId) {
      if (accountId) {
        // JSforce Query
        var query = 'SELECT Id,Name,AccountNumber FROM Account WHERE Id = ' + '\'' + accountId + '\'' +' ORDER BY Name ASC LIMIT 200';
        conn.query(query, function(err, res) {
          if (err) {
            alert(err);
          } else {
            if (res.records.length > 0) {
              scope.account = res.records[0];
            }
          }
          $rootScope.$apply();
        });
      }
    }

    return {
      getAccounts: function(scope) {
        return getAccounts(scope);
      },
      getAccount: function(scope, accountId) {
        return getAccount(scope, accountId);
      },
    };
  }]);
})();