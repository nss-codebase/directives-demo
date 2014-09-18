/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('cmMovieModule', [])
  .factory('MovieApi', ['$http', function($http){
    function info(title){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + title + '&page_limit=1&page=1&apikey=3mhvmefydmkre6dx2c959h6q&callback=JSON_CALLBACK');
    }

    return {info:info};
  }])
  .directive('cmMovie', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/cm-movie/cm-movie.html';
    o.scope       = {title:'@', remove:'&'};
    o.link        = function(scope, element, attrs){
                    };

    o.controller  = ['$scope', 'MovieApi', function($scope, MovieApi){
                      MovieApi.info($scope.title).then(function(response){
                        $scope.movie = response.data.movies[0];
                        $scope.poster = $scope.movie.posters.thumbnail.replace(/_tmb/, '_pos');
                      });
                    }];

    return o;
  }]);
})();

