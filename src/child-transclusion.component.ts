import {Component, Input, OnInit} from 'angular2/core';

@Component({
    selector: '[child-trans]',
    template: `
        <div>{{header}}</div>
        <div>this is child transclusion component</div>
        
        <ng-content></ng-content>
    `
})

export class ChildTransclusionComponent implements OnInit{
    @Input()
    header: string;

    ngOnInit(): void {
        console.log('header', this.header);
    }
}