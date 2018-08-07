import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaisComponent } from './personais.component';

describe('PersonaisComponent', () => {
  let component: PersonaisComponent;
  let fixture: ComponentFixture<PersonaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
