import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagementComponent } from './contactmamangement.component';

describe('ContactmamangementComponent', () => {
  let component: ContactManagementComponent;
  let fixture: ComponentFixture<ContactManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
