import {
  selectCreatedAcronymWorking,
  selectCreatedAcronymHasError,
  selectCreatedAcronym,
} from './selectors/selectors';
import { createAcronym } from './state/add-acronym.actions';
import { IAppState, IAcronym } from 'src/app/models/acronyms.types';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-add-acronym-dialog',
  templateUrl: './add-acronym-dialog.component.html',
  styleUrls: ['./add-acronym-dialog.component.scss'],
})
export class AddAcronymDialogComponent implements OnInit {
  acronyms$: Observable<IAcronym[]>;
  acronym$: Observable<IAcronym>;
  working$: Observable<boolean>;
  hasError$: Observable<boolean>;

  addAcronymForm;

  showCreateAcronymForm = true;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(
    private store: Store<IAppState>,
    private formBuilder: FormBuilder
  ) {
    this.addAcronymForm = this.formBuilder.group({
      name: '',
      title: '',
      description: '',
      link: '',
      author: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(acronym: IAcronym): void {
    this.store.dispatch(createAcronym.action({ payload: acronym }));

    this.acronym$ = this.store.pipe(select(selectCreatedAcronym));
    this.working$ = this.store.pipe(select(selectCreatedAcronymWorking));
    this.hasError$ = this.store.pipe(select(selectCreatedAcronymHasError));

    // TODO: Find a nicer way of resolving this.showAcronymTable
    let isWorking: boolean;
    let createdAcronym: boolean;

    this.working$.subscribe((value) => {
      isWorking = value;
      this.setShowCreateAcronymMessage({ isWorking, createdAcronym });
    });

    this.acronym$.subscribe((acronym: IAcronym) => {
      createdAcronym = !!acronym?.name;
      this.setShowCreateAcronymMessage({ isWorking, createdAcronym });
    });
  }

  setShowCreateAcronymMessage({ isWorking, createdAcronym }): void {
    if (!isWorking && !createdAcronym) {
      this.showErrorMessage = true;
      this.showSuccessMessage = false;
      this.showCreateAcronymForm = false;
    } else if (!isWorking && createdAcronym) {
      this.showErrorMessage = false;
      this.showSuccessMessage = true;
      this.showCreateAcronymForm = false;
    }
  }
}

@Component({
  selector: 'app-add-acronym-open-dialog-button',
  templateUrl: './open-dialog-button/add-acronym-open-dialog.component.html',
  styleUrls: ['./open-dialog-button/add-acronym-open-dialog.component.scss'],
})
export class AddAcronymOpenDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddAcronymDialogComponent, {
      width: '100%',
      maxWidth: '550px',
    });
  }
}
