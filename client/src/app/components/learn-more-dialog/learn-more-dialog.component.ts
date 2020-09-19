import { Component, Input, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAcronym } from 'src/app/models/acronyms.types';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ILearnMoreDialog {
  acronyms: IAcronym[];
  acronymID: string;
}

@Component({
  selector: 'app-learn-more-dialog',
  templateUrl: './learn-more-dialog.component.html',
  styleUrls: ['./learn-more-dialog.component.scss'],
})
export class LearnMoreDialogComponent implements OnInit {
  acronym?: IAcronym;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ILearnMoreDialog) {}

  ngOnInit(): void {
    const { acronyms, acronymID } = this.data;
    this.acronym = acronyms.find(
      (acronym: IAcronym) => acronym._id === acronymID
    );
  }
}

@Component({
  selector: 'app-learn-more-open-dialog-button',
  templateUrl: './open-dialog-button/learn-more-open-dialog.component.html',
  styleUrls: ['./open-dialog-button/learn-more-open-dialog.component.scss'],
})
export class LearnMoreOpenDialogComponent {
  @Input() acronyms: IAcronym[];
  @Input() acronymID: string;

  constructor(public dialog: MatDialog) {}

  openDialog({ acronyms, acronymID }): void {
    this.dialog.open(LearnMoreDialogComponent, {
      maxWidth: '600px',
      data: { acronyms, acronymID },
    });
  }
}
