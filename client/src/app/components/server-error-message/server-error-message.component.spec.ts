import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ServerErrorMessageComponent } from './server-error-message.component';

describe('ServerErrorMessageComponent', () => {
  let component: ServerErrorMessageComponent;
  let fixture: ComponentFixture<ServerErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
      imports: [MatIconModule, MatDialogModule],
      declarations: [ServerErrorMessageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
