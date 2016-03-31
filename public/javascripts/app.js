angular.module("myApp", ["Controllers", "ngRoute", "ngMessages"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "AccountsCtrl",
    templateUrl : "/angular_views/accounts.html"
  }).
  when("/view/:id", {
    controller : "AccountCtrl",
    templateUrl : "/angular_views/account.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);