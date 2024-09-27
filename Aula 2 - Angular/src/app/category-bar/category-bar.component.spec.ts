import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBarComponent } from './category-bar.component';

describe('CategoryBarComponent', () => {
  let component: CategoryBarComponent;
  let fixture: ComponentFixture<CategoryBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
