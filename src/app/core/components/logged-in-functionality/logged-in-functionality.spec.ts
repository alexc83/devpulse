import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInFunctionality } from './logged-in-functionality';

describe('LoggedInFunctionality', () => {
  let component: LoggedInFunctionality;
  let fixture: ComponentFixture<LoggedInFunctionality>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedInFunctionality],
    }).compileComponents();

    fixture = TestBed.createComponent(LoggedInFunctionality);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
