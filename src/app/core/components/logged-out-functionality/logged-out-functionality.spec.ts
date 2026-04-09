import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedOutFunctionality } from './logged-out-functionality';

describe('LoggedOutFunctionality', () => {
  let component: LoggedOutFunctionality;
  let fixture: ComponentFixture<LoggedOutFunctionality>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedOutFunctionality],
    }).compileComponents();

    fixture = TestBed.createComponent(LoggedOutFunctionality);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
