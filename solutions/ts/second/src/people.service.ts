import * as angular from 'angular';

interface IUser {
    name: string;
    email: string;
}

export class PeopleService {
    static $inject = [];

    constructor() {}

    getAll(a: number, b: number): IUser[] {
        return [
            { name: 'Ravi Tambade', email: 'ravi.tambade@transflower.in' },
            { name: 'Sameer Patil', email: 'sameer.patil@gmail.com' },
            { name: 'Manisha Pant', email: 'manisha.pant@gmail.com' }
        ];
    }
}

angular.module('mainApp').factory('PeopleService', PeopleService);
