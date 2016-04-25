angular.module("myApp", ["Controllers", "ngRoute", "ngMessages"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "AccountsCtrl",
    templateUrl : "/angularviews/accounts.html"
  }).
  when("/view/:id", {
    controller : "AccountCtrl",
    templateUrl : "/angularviews/account.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);