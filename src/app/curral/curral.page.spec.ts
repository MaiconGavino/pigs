import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurralPage } from './curral.page';

describe('CurralPage', () => {
  let component: CurralPage;
  let fixture: ComponentFixture<CurralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
