import app from './app';
import AppCtrl from './common/app.ctrl.js';

describe('app', () => {
    let makeCtrl;
    let myScope;

    beforeEach(inject(() => {
        myScope = {};
        makeCtrl = () => {
            return new AppCtrl({ $scope: myScope });
        };
    }));

    describe('AppCtrl', () => {
        it('check test property', () => {
            let ctrl = makeCtrl();
            expect(ctrl.test).toEqual('jasmine');
        });
    });
});

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/authentication/token/new?api_key=%3C%3Capi_key%3E%3E",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
