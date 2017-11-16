import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFolderChildComponent } from './bookmark-folder-child.component';

describe('BookmarkFolderChildComponent', () => {
  let component: BookmarkFolderChildComponent;
  let fixture: ComponentFixture<BookmarkFolderChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkFolderChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkFolderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
