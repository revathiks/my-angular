import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputelementsComponent } from './inputelements.component';

describe('InputelementsComponent', () => {
  let component: InputelementsComponent;
  let fixture: ComponentFixture<InputelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
