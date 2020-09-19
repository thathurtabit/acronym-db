import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcronymDialogComponent } from './add-acronym-dialog.component';

describe('AddAcronymDialogComponent', () => {
  let component: AddAcronymDialogComponent;
  let fixture: ComponentFixture<AddAcronymDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcronymDialogComponent ]
    })
    .compileComponents();
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
