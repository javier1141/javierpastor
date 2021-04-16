import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFormattingExampleComponent } from './slider-formatting-example.component';

describe('SliderFormattingExampleComponent', () => {
  let component: SliderFormattingExampleComponent;
  let fixture: ComponentFixture<SliderFormattingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderFormattingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFormattingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
