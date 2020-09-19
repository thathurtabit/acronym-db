import { createAcronym } from './state/add-acronym.actions';
import { IAppState, IAcronym } from 'src/app/models/acronyms.types';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';

enum EAcronymFormStatus {
  default = 'default',
  pending = 'pending',
  success = 'success',
  fail = 'fail',
}

@Component({
  selector: 'app-add-acronym-dialog',
  templateUrl: './add-acronym-dialog.component.html',
  styleUrls: ['./add-acronym-dialog.component.scss'],
})
export class AddAcronymDialogComponent implements OnInit {
  addAcronymForm;
  acronymSentStatus: EAcronymFormStatus;

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
