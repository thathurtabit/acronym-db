import { FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  EditAcronymDialogComponent,
  EditAcronymOpenDialogComponent,
} from './edit-acronym-dialog.component';

const dummyAcronymFormValue = {
  acronym: {
    name: 'Stephen',
  },
};

describe('EditAcronymDialogComponent', () => {
  let component: EditAcronymDialogComponent;
  let fixture: ComponentFixture<EditAcronymDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        EditAcronymDialogComponent,
        {
          provide: MAT_DIALOG_DATA,
          useValue: dummyAcronymFormValue,
        },
      ],
      imports: [StoreModule.forRoot({}), MatIconModule, MatDialogModule],
      declarations: [
        EditAcronymDialogComponent,
        EditAcronymOpenDialogComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcronymDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
