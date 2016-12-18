(function(angular) {
    // "use strict";

    // start your ride
    // 主模块，所有其他的模块，都由主模块统一处理
    angular.module('moviecat', [
        'moviecat.clickActive',
        'moviecat.jsonpSrv',
        'moviecat.home',
        //需要将详情模块放在列表模块前面，
        //因为点击每个选项所产生的hash值满足列表模块路由的匹配规则
        //会优先跟列表模块的路由匹配就不再跟详情模块的路由匹配
        'moviecat.movie_detail',
        'moviecat.movie_list',

    ]).controller('MovieCatController', ['$scope', '$location', function($scope, $location) {
        //初始化搜索关键字
        $scope.keyWord = '';

        //暴露点击搜索的方法
        $scope.search = function() {
            if(!(!!$scope.keyWord)){
                return
            }
            $location.url('search?q=' + $scope.keyWord);
        }
    }])

})(angular);
