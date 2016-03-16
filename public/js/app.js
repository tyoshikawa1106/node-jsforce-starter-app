angular.module("myApp", ["Controllers", "ngRoute", "ngMessages"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "AccountsCtrl",
    templateUrl : "/partials/accounts.html"
  }).
  when("/view/:id", {
    controller : "AccountCtrl",
    templateUrl : "/partials/account.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);