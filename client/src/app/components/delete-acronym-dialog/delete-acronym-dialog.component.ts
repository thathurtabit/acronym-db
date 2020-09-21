import { getAcronyms } from '../acronym-table/state/acronym-table.actions';
import {
  selectDeletedAcronymWorking,
  selectDeletedAcronymHasError,
  selectDeletedAcronym,
} from './selectors/selectors';
import { deleteAcronym } from './state/delete-acronym.actions';
import { IAppState, IAcronym } from 'src/app/models/acronyms.types';
import { Inject, Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IEditDialog {
  acronymID: string;
  acronym: IAcronym;
}

@Component({
  selector: 'app-delete-acronym-dialog',
  templateUrl: './delete-acronym-dialog.component.html',
  styleUrls: ['./delete-acronym-dialog.component.scss'],
})
export class DeleteAcronymDialogComponent implements OnInit {
  deletedAcronym$: Observable<IAcronym>;
  working$: Observable<boolean>;
  hasError$: Observable<boolean>;

  showDeleteAcronymPrompt = true;
  showSuccessMessage = false;
  showErrorMessage = false;

  currentAcronymID: string;
  currentAcronym: IAcronym;

  constructor(
    @Inject(MAT_DIALOG_DATA) public acronymData: IEditDialog,
    private dialogRef: MatDialog,
    private store: Store<IAppState>
  ) {
    this.currentAcronymID = this.acronymData.acronymID;
    this.currentAcronym = this.acronymData.acronym;
  }

  ngOnInit(): void {}

  onDelete(): void {
    this.store.dispatch(
      deleteAcronym.action({ id: this.acronymData.acronymID })
    );

    this.deletedAcronym$ = this.store.pipe(select(selectDeletedAcronym));
    this.working$ = this.store.pipe(select(selectDeletedAcronymWorking));
    this.hasError$ = this.store.pipe(select(selectDeletedAcronymHasError));

    // TODO: Find a nicer way of resolving this.showAcronymTable
    let isWorking: boolean;
    let deletedAcronym: boolean;

    this.working$.subscribe((value) => {
      isWorking = value;
      this.setShowDeletedAcronymMessage({ isWorking, deletedAcronym });
    });

    this.deletedAcronym$.subscribe((acronym: IAcronym) => {
      deletedAcronym = !!acronym?.name;
      this.setShowDeletedAcronymMessage({ isWorking, deletedAcronym });
    });
  }

  onCloseAll(): void {
    this.dialogRef.closeAll();
  }

  setShowDeletedAcronymMessage({ isWorking, deletedAcronym }): void {
    if (!isWorking && !deletedAcronym) {
      this.showErrorMessage = true;
      this.showSuccessMessage = false;
      this.showDeleteAcronymPrompt = false;
    } else if (!isWorking && deletedAcronym) {
      this.showErrorMessage = false;
      this.showSuccessMessage = true;
      this.showDeleteAcronymPrompt = false;
      // Request reload of acronyms
      this.store.dispatch({ type: getAcronyms.type });
    }
  }
}

@Component({
  selector: 'app-delete-acronym-open-dialog-button',
  templateUrl: './open-dialog-button/delete-acronym-open-dialog.component.html',
  styleUrls: ['./open-dialog-button/delete-acronym-open-dialog.component.scss'],
})
export class DeleteAcronymOpenDialogComponent {
  @Input() acronymID: string;
  @Input() acronym: IAcronym;

  constructor(public dialog: MatDialog) {}

  openDialog({ acronymID, acronym }: IEditDialog): void {
    console.log(acronymID, acronym);
    this.dialog.open(DeleteAcronymDialogComponent, {
      width: '100%',
      maxWidth: '450px',
      data: { acronymID, acronym },
    });
  }
}
