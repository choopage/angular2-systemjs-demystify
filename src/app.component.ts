import {Component} from 'angular2/core';

@Component({
    selector: 'demo-app',
    template: `
        <div>hello {{name}}</div>
    `
})

export class DemoApp {
    name: string = 'world Jek';
}