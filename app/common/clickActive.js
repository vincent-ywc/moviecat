/*
 * @Author: pao
 * @Date:   2016-12-15 11:41:41
 * @Last Modified by:   pao
 * @Last Modified time: 2016-12-15 16:27:46
 */

'use strict';
! function(angular) {
    /**
     * moviecat.clickActive Module
     *
     * Description
     */
    angular.module('moviecat.clickActive', []).directive('clickActive', ['$location', function($location) {
        // Runs during compile
        return {
            link: function($scope, iElm, iAttrs, controller) {

                $scope.location = $location;
                $scope.$watch('location.url()', function(newValue) {
                    var aLink = iElm.children('a').attr('href');
                    if (aLink.indexOf(newValue) > -1) {
                        iElm.parent().children().removeClass('active');
                        iElm.addClass('active');
                    }
                })
            }
        };
    }]);
}(angular);
