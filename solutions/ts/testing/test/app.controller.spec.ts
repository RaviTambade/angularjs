/// <reference path="angular.d.ts" />
/// <reference path="../node_modules/angular-mocks/angular-mocks.d.ts" />

import { IControllerService, IRootScopeService } from 'angular';

describe('MainController', () => {
  let $controller: IControllerService;
  let $rootScope: IRootScopeService;
  let controller: any;

  // Load the app module before each test
  beforeEach(angular.mock.module('app'));

  beforeEach(inject((_$controller_: IControllerService, _$rootScope_: IRootScopeService) => {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  it('should define a message', () => {
    // Instantiate the controller
    controller = $controller('MainController', { $scope: $rootScope });
    expect(controller.message).toBe('Hello, AngularJS with TypeScript!');
  });
});
