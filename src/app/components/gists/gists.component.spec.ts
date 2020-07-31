import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistsComponent } from './gists.component';

describe('GistsComponent', () => {
  let component: GistsComponent;
  let fixture: ComponentFixture<GistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
