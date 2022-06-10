import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillesPage } from './billes.page';

describe('BillesPage', () => {
  let component: BillesPage;
  let fixture: ComponentFixture<BillesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
