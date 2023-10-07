import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNewsComponent } from './feed-news.component';

describe('FeedNewsComponent', () => {
  let component: FeedNewsComponent;
  let fixture: ComponentFixture<FeedNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedNewsComponent]
    });
    fixture = TestBed.createComponent(FeedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
