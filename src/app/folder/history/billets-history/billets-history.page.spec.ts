import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BilletsHistoryPage } from './billets-history.page';

describe('BilletsHistoryPage', () => {
  let component: BilletsHistoryPage;
  let fixture: ComponentFixture<BilletsHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilletsHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BilletsHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
