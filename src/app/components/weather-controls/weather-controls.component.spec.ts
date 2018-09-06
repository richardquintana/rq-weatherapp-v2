import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherControlsComponent } from './weather-controls.component';

describe('WeatherControlsComponent', () => {
  let component: WeatherControlsComponent;
  let fixture: ComponentFixture<WeatherControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
