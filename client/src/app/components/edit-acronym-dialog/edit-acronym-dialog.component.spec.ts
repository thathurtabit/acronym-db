import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcronymDialogComponent } from './edit-acronym-dialog.component';

describe('EditAcronymDialogComponent', () => {
  let component: EditAcronymDialogComponent;
  let fixture: ComponentFixture<EditAcronymDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditAcronymDialogComponent],
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
