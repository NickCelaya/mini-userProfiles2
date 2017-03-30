angular.module('userProfiles').service('mainService', function($http) {
    // $http request is passed into our service function to retrieve data from server with api.

    this.getUsers = function(){  //this refers to service then created a function to  return our http request
        return $http({  // making an $http request to api on server
					method: "GET", // using method "GET" to retrieve the api data
					url: "https://reqres.in/api/users?page=1" //url to server api
				})
    };

}); // end of the service file
