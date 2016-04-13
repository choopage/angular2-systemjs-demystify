import {Component} from 'angular2/core';
import {ChildTransclusionComponent} from './child-transclusion.component';

@Component({
    selector: 'parent-trans',
    template: `
        <div child-trans header="Jek Bao Choo">
            This is parent transclusion component where the ng-content is used to render me!!!
            <br>
            //Remember that the header input is header, not [header] but why???
        </div>
    `,
    directives: [ChildTransclusionComponent]
})

export class ParentTransclusionComponent {

}