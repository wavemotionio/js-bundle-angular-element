import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewedSalesComponent } from './recently-viewed-sales.component';

describe('RecentlyViewedSalesComponent', () => {
  let component: RecentlyViewedSalesComponent;
  let fixture: ComponentFixture<RecentlyViewedSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyViewedSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyViewedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
