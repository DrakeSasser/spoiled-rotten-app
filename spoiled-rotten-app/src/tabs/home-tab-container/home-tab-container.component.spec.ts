import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTabContainerComponent } from './home-tab-container.component';

describe('HomeTabContainerComponent', () => {
  let component: HomeTabContainerComponent;
  let fixture: ComponentFixture<HomeTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTabContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
