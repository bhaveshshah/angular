import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavroitesComponent } from './favroites.component';

describe('FavroitesComponent', () => {
  let component: FavroitesComponent;
  let fixture: ComponentFixture<FavroitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavroitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavroitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
