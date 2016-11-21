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
