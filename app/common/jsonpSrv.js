/*
 * @Author: pao
 * @Date:   2016-12-14 22:10:07
 * @Last Modified by:   pao
 * @Last Modified time: 2016-12-15 18:43:21
 */

'use strict';
! function(angular) {
    /**
     * moviecat.jsonpSrv Module
     *
     * Description
     */
    angular.module('moviecat.jsonpSrv', []).service('jsonpSrv', ['$window', function($window) {

        var $doc = $window.document;

        this.sendJsonp = function(option) {

            var url = option.url + '?';


            for (var k in option.params) {
                url += k + '=' + option.params[k] + '&'
            }

            var cbName = 'JSON_CB' + (+new Date());

            url += 'callback=' + cbName;

            $window[cbName] = function(data) {
                option.callback(data);
                $doc.body.removeChild(script);

                delete $window[cbName];

            }

            var script = $doc.createElement('script');

            script.src = url;

            $doc.body.appendChild(script);

        }


    }])
}(angular);
