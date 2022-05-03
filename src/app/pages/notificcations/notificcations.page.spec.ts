import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificcationsPage } from './notificcations.page';

describe('NotificcationsPage', () => {
  let component: NotificcationsPage;
  let fixture: ComponentFixture<NotificcationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificcationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificcationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
