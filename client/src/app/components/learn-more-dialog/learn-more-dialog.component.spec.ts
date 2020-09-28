import { dummyGetAcronymsListResponse } from './../../services/acronyms.service.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  LearnMoreDialogComponent,
  LearnMoreOpenDialogComponent,
} from './learn-more-dialog.component';
import { acronymsTableReducer } from '../acronym-table/state/acronym-table.reducer';

const dummyAcronymsList = { acronyms: dummyGetAcronymsListResponse.data };

describe('LearnMoreDialogComponent', () => {
  let component: LearnMoreDialogComponent;
  let fixture: ComponentFixture<LearnMoreDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        LearnMoreDialogComponent,
        {
          provide: MAT_DIALOG_DATA,
          useValue: dummyAcronymsList,
        },
      ],
      imports: [
        StoreModule.forRoot({ acronyms: acronymsTableReducer }),
        MatIconModule,
        MatDialogModule,
      ],
      declarations: [LearnMoreDialogComponent, LearnMoreOpenDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
