import { getAcronyms } from './../acronym-table/state/acronym-table.actions';
import {
  selectEditedAcronymWorking,
  selectEditedAcronymHasError,
  selectEditedAcronym,
} from './selectors/selectors';
import { editAcronym } from './state/edit-acronym.actions';
import { IAppState, IAcronym } from 'src/app/models/acronyms.types';
import { Inject, Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IEditDialog {
  acronymID: string;
  acronym: IAcronym;
}

@Component({
  selector: 'app-edit-acronym-dialog',
  templateUrl: './edit-acronym-dialog.component.html',
  styleUrls: ['./edit-acronym-dialog.component.scss'],
})
export class EditAcronymDialogComponent implements OnInit {
  acronyms$: Observable<IAcronym[]>;
  acronym$: Observable<IAcronym>;
  working$: Observable<boolean>;
  hasError$: Observable<boolean>;

  currentAcronym: IAcronym;
  currentAcronymID: string;

  editAcronymForm;

  showEditAcronymForm = true;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public acronymData: IEditDialog,
    private dialogRef: MatDialog,
    private store: Store<IAppState>,
    private formBuilder: FormBuilder
  ) {
    this.editAcronymForm = this.formBuilder.group({
      name: acronymData.acronym.name,
      title: acronymData.acronym.title,
      description: acronymData.acronym.description,
      link: acronymData.acronym.link,
      author: acronymData.acronym.author,
    });

    this.currentAcronymID = this.acronymData.acronymID;
    this.currentAcronym = this.acronymData.acronym;
  }

  ngOnInit(): void {}

  onSubmit(acronym: IAcronym): void {
    this.store.dispatch(
      editAcronym.action({ id: this.acronymData.acronymID, payload: acronym })
    );

    this.acronym$ = this.store.pipe(select(selectEditedAcronym));
    this.working$ = this.store.pipe(select(selectEditedAcronymWorking));
    this.hasError$ = this.store.pipe(select(selectEditedAcronymHasError));

    // TODO: Find a nicer way of resolving this.showAcronymTable
    let isWorking: boolean;
    let createdAcronym: boolean;

    this.working$.subscribe((value) => {
      isWorking = value;
      this.setShowEditAcronymMessage({ isWorking, createdAcronym });
    });

    this.acronym$.subscribe((acronym: IAcronym) => {
      createdAcronym = !!acronym?.name;
      this.setShowEditAcronymMessage({ isWorking, createdAcronym });
    });
  }

  onCloseAll(): void {
    this.dialogRef.closeAll();
  }

  setShowEditAcronymMessage({ isWorking, createdAcronym }): void {
    if (!isWorking && !createdAcronym) {
      this.showErrorMessage = true;
      this.showSuccessMessage = false;
      this.showEditAcronymForm = false;
    } else if (!isWorking && createdAcronym) {
      this.showErrorMessage = false;
      this.showSuccessMessage = true;
      this.showEditAcronymForm = false;
      // Request reload of acronyms
      this.store.dispatch({ type: getAcronyms.type });
    }
  }
}

@Component({
  selector: 'app-edit-acronym-open-dialog-button',
  templateUrl: './open-dialog-button/edit-acronym-open-dialog.component.html',
  styleUrls: ['./open-dialog-button/edit-acronym-open-dialog.component.scss'],
})
export class EditAcronymOpenDialogComponent {
  @Input() acronymID: string;
  @Input() acronym: IAcronym;

  constructor(public dialog: MatDialog) {}

  openDialog({ acronymID, acronym }: IEditDialog): void {
    this.dialog.open(EditAcronymDialogComponent, {
      width: '100%',
      maxWidth: '550px',
      data: { acronymID, acronym },
    });
  }
}
