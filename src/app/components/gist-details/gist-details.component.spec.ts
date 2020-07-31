import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistDetailsComponent } from './gist-details.component';

describe('GistDetailsComponent', () => {
  let component: GistDetailsComponent;
  let fixture: ComponentFixture<GistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
