var app2 = angular.module("myapp",["ngRoute"]);
app2.controller("myctrl",($scope)=>{});
app2.config(function($routeProvider){
    $routeProvider.when('/URK19EC2045',{
        templateUrl:'./student1.html'
    }).when('/URK20CS3026',{
        templateUrl:'./student2.html'
    }).when('/URK22FP2001',{
        templateUrl:'./student3.html'
    }).when('/URK18CS3042',{
        templateUrl:'./student4.html'
    }).when('/URK21ME2015',{
        templateUrl:'./student5.html'
    }).otherwise({redirectTo:'/'})
 });