import { FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AddAcronymDialogComponent,
  AddAcronymOpenDialogComponent,
} from './add-acronym-dialog.component';

describe('AddAcronymDialogComponent', () => {
  let component: AddAcronymDialogComponent;
  let fixture: ComponentFixture<AddAcronymDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        AddAcronymDialogComponent,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
      imports: [StoreModule.forRoot({}), MatIconModule, MatDialogModule],
      declarations: [AddAcronymDialogComponent, AddAcronymOpenDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcronymDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
