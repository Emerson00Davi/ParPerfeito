import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusMatchesPage } from './meus-matches.page';

describe('MeusMatchesPage', () => {
  let component: MeusMatchesPage;
  let fixture: ComponentFixture<MeusMatchesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusMatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
