import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant1Component } from './composant1.component';

describe('Composant1Component', () => {
  let component: Composant1Component;
  let fixture: ComponentFixture<Composant1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Composant1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Composant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});