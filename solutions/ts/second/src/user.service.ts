import * as angular from 'angular';
import { PeopleService } from './people.service';

export class UserService {
    static $inject = ['PeopleService'];

    constructor(private PeopleService: PeopleService) {}

    getUsers(a: number): any[] {
        return this.PeopleService.getAll(a, a);
    }
}

angular.module('mainApp').service('UserService', UserService);
