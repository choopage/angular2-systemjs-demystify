import {Component} from 'angular2/core';
import {ParentTransclusionComponent} from './parent-transclusion.component';

@Component({
    selector: 'demo-app',
    template: `
        <div>hello {{name}}</div>
        
        <parent-trans></parent-trans>
    `,
    directives: [ParentTransclusionComponent]
})

export class DemoApp{
    name: string = 'world Jek';

}