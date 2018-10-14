import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {By} from '@angular/platform-browser';
import {WalletService} from '../services/wallet.service';
import Spy = jasmine.Spy;
import {HttpClientTestingModule} from '../../../node_modules/@angular/common/http/testing';
import {Observable} from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let walletService: WalletService;
  let spy: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();

    walletService = TestBed.get(WalletService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user information section', function () {
    const userInformationElement = fixture.debugElement.query(By.css('#user-information'));

    expect(userInformationElement).toBeTruthy();
  });

  it('should call the fetch every time ngOnInit', () => {
    spy = spyOn(walletService, 'fetch').and.returnValue({ subscribe: () => {} });

    component.ngOnInit();
    expect(walletService.fetch).toHaveBeenCalled();
  });
});
