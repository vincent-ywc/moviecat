/*
 * @Author: pao
 * @Date:   2016-12-15 16:22:56
 * @Last Modified by:   pao
 * @Last Modified time: 2016-12-15 22:46:26
 */

'use strict';
! function(angular) {
    /**
     * moviecat.movie_detail Module
     *
     * Description
     */
    angular.module('moviecat.movie_detail', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/details/:id?', {
            templateUrl: './movie_detail/view.html',
            controller: 'MovieDetailController'
        })
    }]).controller('MovieDetailController', ['$scope', '$routeParams', 'jsonpSrv', function($scope, $routeParams, jsonpSrv) {


        jsonpSrv.sendJsonp({
            url: 'https://api.douban.com/v2/movie/subject/' + $routeParams.id,
            callback: function(data) {
                $scope.data = data;
                $scope.$apply();
            }
        })

    }])
}(angular);
