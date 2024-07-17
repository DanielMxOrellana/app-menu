import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla02Component } from './pantalla-02.component';

describe('Pantalla02Component', () => {
  let component: Pantalla02Component;
  let fixture: ComponentFixture<Pantalla02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pantalla02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
