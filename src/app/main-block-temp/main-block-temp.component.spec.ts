import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlockTempComponent } from './main-block-temp.component';

describe('MainBlockTempComponent', () => {
  let component: MainBlockTempComponent;
  let fixture: ComponentFixture<MainBlockTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBlockTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBlockTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
