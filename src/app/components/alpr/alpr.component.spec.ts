import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlprComponent } from './alpr.component';

describe('AlprComponent', () => {
  let component: AlprComponent;
  let fixture: ComponentFixture<AlprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
