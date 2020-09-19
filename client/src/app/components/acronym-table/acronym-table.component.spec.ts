import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcronymTableComponent } from './acronym-table.component';

describe('AcronymTableComponent', () => {
  let component: AcronymTableComponent;
  let fixture: ComponentFixture<AcronymTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcronymTableComponent ]
    })
    .compileComponents();
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
