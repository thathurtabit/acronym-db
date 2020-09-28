import { acronymsTableReducer } from './state/acronym-table.reducer';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AcronymTableComponent } from './acronym-table.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AcronymTableComponent', () => {
  let component: AcronymTableComponent;
  let fixture: ComponentFixture<AcronymTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ acronyms: acronymsTableReducer }),
        MatIconModule,
        MatTableModule,
      ],
      declarations: [AcronymTableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcronymTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
