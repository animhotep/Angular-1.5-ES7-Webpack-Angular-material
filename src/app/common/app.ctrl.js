export default class AppCtrl {
    constructor($scope, $mdSidenav) {
        $scope.toggleList = function() {
            $mdSidenav('left').toggle();
        }
    }
}
