import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCarsComponent } from './modify.cars.component';

describe('ModifyCarsComponent', () => {
  let component: ModifyCarsComponent;
  let fixture: ComponentFixture<ModifyCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyCarsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
