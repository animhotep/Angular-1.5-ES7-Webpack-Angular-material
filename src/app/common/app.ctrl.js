export default class AppCtrl {
    constructor($scope, $mdSidenav) {
        this.test = 'jasmine';
        $scope.toggleList = function() {
            $mdSidenav('left').toggle();
        }
    }
}
