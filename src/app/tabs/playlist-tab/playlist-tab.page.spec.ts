import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistTabPage } from './playlist-tab.page';

describe('PlaylistTabPage', () => {
  let component: PlaylistTabPage;
  let fixture: ComponentFixture<PlaylistTabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
