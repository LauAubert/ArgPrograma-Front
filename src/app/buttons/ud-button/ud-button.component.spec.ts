import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdButtonComponent } from './ud-button.component';

describe('UdButtonComponent', () => {
  let component: UdButtonComponent;
  let fixture: ComponentFixture<UdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
