import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-backlog',
    templateUrl: 'backlog.component.html'
})

export class BacklogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<BacklogComponent>,
    ) { }

    ngOnInit() { }
}