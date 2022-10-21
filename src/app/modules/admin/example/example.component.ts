import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
    selector: 'example',
    templateUrl: './example.component.html'
})

export class ExampleComponent implements OnInit, OnDestroy {

    /**
     * Constructor
     */
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }
}
