export default class ItemCtrl {
    constructor($stateParams, $http) {
      var maodel = this;
        this.movieName = $stateParams.movieName;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e442ad82538a59f2029879dbb2ee3ece",
            "method": "GET",
            "headers": {},
            "data": "{}"
        }

        $http(settings).then(function successCallback(response) {
            maodel.data = response.data.results;
        }, function errorCallback(response) {
            console.log(response);
        });

    }
}
