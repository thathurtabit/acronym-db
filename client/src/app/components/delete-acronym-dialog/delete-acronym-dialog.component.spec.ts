import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  DeleteAcronymDialogComponent,
  DeleteAcronymOpenDialogComponent,
} from './delete-acronym-dialog.component';

describe('DeleteAcronymDialogComponent', () => {
  let component: DeleteAcronymDialogComponent;
  let fixture: ComponentFixture<DeleteAcronymDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        DeleteAcronymDialogComponent,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
      imports: [StoreModule.forRoot({}), MatIconModule, MatDialogModule],
      declarations: [
        DeleteAcronymDialogComponent,
        DeleteAcronymOpenDialogComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAcronymDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
