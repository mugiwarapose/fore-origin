var loginApp = angular.module('loginApp',[]);

loginApp.controller('loginController',['$scope','$http',function( $scope,$http){

    /*var myResource = $resource('http://localhost:8080/origin/login',{},{
        myPost:{
            method:"post",
            url:"http://localhost:8080/origin/login",
            params:$scope.formData,
            isArray:true,
            headers: { 'Access-Control-Allow-Origin': '*' }
        }
    });*/



    $scope.login = function(){

        /*$http.post('http://192.168.3.2:8080/origin/login',{username:'name_eu'},{'Content-Type':'application/x-www-form-urlencoded'}).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            alert(response);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });*/
      $http({

         url:"http://192.168.3.2:8080/origin/login",
         method:"post",
         headers:{'Content-Type':'application/x-www-form-urlencoded'},
         params:
             $scope.formData

         });



    }


    function JSON_CALLBACK(data) {
        alert(data);
    }


}]);