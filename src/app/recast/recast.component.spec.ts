import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecastComponent } from './recast.component';

describe('RecastComponent', () => {
  let component: RecastComponent;
  let fixture: ComponentFixture<RecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
