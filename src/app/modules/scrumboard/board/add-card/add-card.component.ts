import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Board, Card, Label, List } from '../../scrumboard.models';
import { MatDialogRef } from '@angular/material/dialog';
import moment from 'moment';
import { debounceTime, Subject, takeUntil, tap } from 'rxjs';
import { assign } from 'lodash';
import { ScrumboardService } from '../../scrumboard.service';

@Component({
    selector: 'scrumboard-board-add-card',
    templateUrl: './add-card.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrumboardBoardAddCardComponent implements OnInit {
    @ViewChild('titleInput') titleInput: ElementRef;
    @ViewChild('titleAutosize') titleAutosize: CdkTextareaAutosize;
    @Input() buttonTitle: string = 'Add a card';
    @Output() readonly saved: EventEmitter<string> = new EventEmitter<string>();

    board: Board;
    card: Card | any = {};
    cardForm: UntypedFormGroup;
    labels: Label[];
    filteredLabels: Label[];

    // Private
    private readonly _positionStep: number = 65536;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * Constructor
     */
    constructor(
        public matDialogRef: MatDialogRef<ScrumboardBoardAddCardComponent>,
        private _changeDetectorRef: ChangeDetectorRef,
        private _scrumboardService: ScrumboardService,
        private _formBuilder: UntypedFormBuilder
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        // Get the board
        this._scrumboardService.board$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((board: Board) => {
                this.board = { ...board };

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        this.cardForm = this._formBuilder.group({
            id: [''],
            title: ['', Validators.required],
            description: [''],
            labels: [[]],
            dueDate: [null]
        });

        // Update card when there is a value change on the card form
        this.cardForm.valueChanges
            .pipe(
                tap((value) => {

                    // Update the card object
                    this.card = assign(this.card, value);
                }),
                debounceTime(300),
                takeUntil(this._unsubscribeAll)
            ).subscribe();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
 * Check if the given date is overdue
 */
    isOverdue(date: string): boolean {
        return moment(date, moment.ISO_8601).isBefore(moment(), 'days');
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
    /**
* Filter labels
*
* @param event
*/
    filterLabels(event): void {
        // Get the value
        const value = event.target.value.toLowerCase();

        // Filter the labels
        this.filteredLabels = this.labels.filter(label => label.title.toLowerCase().includes(value));
    }

    /**
     * Filter labels input key down event
     *
     * @param event
     */
    filterLabelsInputKeyDown(event): void {
        // Return if the pressed key is not 'Enter'
        if (event.key !== 'Enter') {
            return;
        }

        // If there is no label available...
        if (this.filteredLabels.length === 0) {
            // Return
            return;
        }

        // If there is a label...
        const label = this.filteredLabels[0];
        const isLabelApplied = this.card.labels.find(cardLabel => cardLabel.id === label.id);

        // If the found label is already applied to the card...
        if (isLabelApplied) {
            // Remove the label from the card
            this.removeLabelFromCard(label);
        }
        else {
            // Otherwise add the label to the card
            this.addLabelToCard(label);
        }
    }

    /**
    * Add label to the card
    *
    * @param label
    */
    addLabelToCard(label: Label): void {
        // Add the label
        this.card.labels.unshift(label);

        // Update the card form data
        this.cardForm.get('labels').patchValue(this.card.labels);

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Remove label from the card
     *
     * @param label
     */
    removeLabelFromCard(label: Label): void {
        // Remove the label
        this.card.labels.splice(this.card.labels.findIndex(cardLabel => cardLabel.id === label.id), 1);

        // Update the card form data
        this.cardForm.get('labels').patchValue(this.card.labels);

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Add new card
     */
    addCard(): void {
        var list = this.board.lists.filter(x => x.title == 'To do')[0] as List;
        // Create a new card model
        this.card.boardId = this.board.id;
        this.card.listId = list.id;
        this.card.position = list.cards.length ? list.cards[list.cards.length - 1].position + this._positionStep : this._positionStep;

        // Save the card
        this._scrumboardService.createCard(this.card).subscribe();
    }
}
