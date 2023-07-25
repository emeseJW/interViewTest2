import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponentInMYLIFEComponent } from './my-first-component-in-mylife.component';

describe('MyFirstComponentInMYLIFEComponent', () => {
  let component: MyFirstComponentInMYLIFEComponent;
  let fixture: ComponentFixture<MyFirstComponentInMYLIFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstComponentInMYLIFEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstComponentInMYLIFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
