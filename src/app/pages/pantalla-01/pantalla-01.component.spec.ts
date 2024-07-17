import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla01Component } from './pantalla-01.component';

describe('Pantalla01Component', () => {
  let component: Pantalla01Component;
  let fixture: ComponentFixture<Pantalla01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pantalla01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
