import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla03Component } from './pantalla-03.component';

describe('Pantalla03Component', () => {
  let component: Pantalla03Component;
  let fixture: ComponentFixture<Pantalla03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pantalla03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
