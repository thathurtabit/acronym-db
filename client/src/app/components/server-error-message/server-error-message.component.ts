import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-server-error-message',
  templateUrl: './server-error-message.component.html',
  styleUrls: ['./server-error-message.component.scss'],
})
export class ServerErrorMessageComponent implements OnInit {
  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {}

  onCloseAll(): void {
    this.dialogRef.closeAll();
  }
}
