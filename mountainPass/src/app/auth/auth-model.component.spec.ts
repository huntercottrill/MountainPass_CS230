
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { authModal } from './auth-modal.component';

describe('authModal', () => {
  let component: authModal;
  let fixture: ComponentFixture<authModal>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [authModal]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(authModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});