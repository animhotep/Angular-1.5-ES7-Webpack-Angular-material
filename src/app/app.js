import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';

//my app
import AppCtrl from './common/app.ctrl';
import HomeCtrl from './home/home.ctrl';
import ItemCtrl from './item/item.ctrl';

//styles
import 'angular-material/angular-material.min.css';
import '../style/app.scss';

const MODULE_NAME = 'app';

export default angular.module(MODULE_NAME, ['ngMaterial', 'ui.router'])
    .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                template: require('./home/home.html')
            })
            .state('movies', {
                url: '/movies/{movieName}',
                template: require('./item/item.html'),
                controller: 'ItemCtrl',
                controllerAs: 'movie'
            })
            .state('about', {
                url: '/about',
                template: '<h1>My about</h1>'
            })
    })
    .directive('mAppLoading', function() {
        return ({
            link: link,
            restrict: "E"
        });

        function link(scope, element, attributes) {
            element.remove();
        }
    })
    .controller('AppCtrl', AppCtrl)
    .controller('ItemCtrl', ItemCtrl);

