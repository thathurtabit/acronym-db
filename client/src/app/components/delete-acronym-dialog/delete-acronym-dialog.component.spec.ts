import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAcronymDialogComponent } from './delete-acronym-dialog.component';

describe('DeleteAcronymDialogComponent', () => {
  let component: DeleteAcronymDialogComponent;
  let fixture: ComponentFixture<DeleteAcronymDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAcronymDialogComponent],
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
