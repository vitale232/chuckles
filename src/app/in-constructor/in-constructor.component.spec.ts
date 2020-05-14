import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InConstructorComponent } from './in-constructor.component';

describe('InConstructorComponent', () => {
  let component: InConstructorComponent;
  let fixture: ComponentFixture<InConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
