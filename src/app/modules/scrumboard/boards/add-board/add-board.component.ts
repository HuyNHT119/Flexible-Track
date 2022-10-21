import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-add-board',
    templateUrl: './add-board.component.html',
})
export class ScrumboardBoardsAddBoardComponent implements OnInit, OnDestroy, AfterViewInit {

    createBoardForm: UntypedFormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        public dialogRef: MatDialogRef<ScrumboardBoardsAddBoardComponent>,
        private _changeDetectorRef: ChangeDetectorRef,
        private _formBuilder: UntypedFormBuilder,
    ) { }

    ngOnInit(): void {
        this.initialcreateBoardForm();
    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    private initialcreateBoardForm(): void {
        this.createBoardForm = this._formBuilder.group({
            title: ['', [Validators.required]],
            content: [''],
            description: [''],
        });
    }

}