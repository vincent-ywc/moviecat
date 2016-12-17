/*
 * @Author: pao
 * @Date:   2016-12-14 22:06:06
 * @Last Modified by:   pao
 * @Last Modified time: 2016-12-15 22:55:35
 */

'use strict';
! function(angular) {
    /**
     * moviecat.movie_list Module
     *
     * Description
     */
    angular.module('moviecat.movie_list', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:movieType/:page?', {
            templateUrl: './movie_list/view.html',
            controller: 'MovieListController'
        }).otherwise({
            redirectTo: '/home_page'
        })
    }]).controller('MovieListController', ['$scope', '$routeParams', '$route', 'jsonpSrv', function($scope, $routeParams, $route, jsonpSrv) {

        $scope.isLoading = true;
        $scope.pageSize = 10;
        $scope.curPage = $routeParams.page || 1;

        var start = ($scope.curPage - 1) * $scope.pageSize;

        jsonpSrv.sendJsonp({
            url: 'https://api.douban.com/v2/movie/' + $routeParams.movieType,
            params: {
                count: $scope.pageSize,
                start: start,
                q: $routeParams.q
            },
            callback: function(data) {
                $scope.datas = data;
                $scope.totalPage = Math.ceil(data.total / $scope.pageSize);
                $scope.isLoading = false;
                $scope.$apply();
            }
        })

        $scope.go = function(newPage) {

            if (newPage <= 0 || newPage >= $scope.totalPage) {
                return;
            }

            $route.updateParams({ page: newPage });

        }



    }])
}(angular);
