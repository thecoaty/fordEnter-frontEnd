import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNav } from './aside-nav';

describe('AsideNav', () => {
  let component: AsideNav;
  let fixture: ComponentFixture<AsideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
