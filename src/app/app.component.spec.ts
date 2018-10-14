import {TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {By} from '@angular/platform-browser';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {Router, RouterOutlet, Routes} from '@angular/router';
import {routes} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TransactionContainerComponent} from './transaction/transaction-container/transaction-container.component';
import {TransactionFormComponent} from './transaction/transaction-form/transaction-form.component';
import {TransactionListComponent} from './transaction/transaction-list/transaction-list.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        TransactionContainerComponent,
        NavigationBarComponent,
        TransactionFormComponent,
        TransactionListComponent,
      ],
    }).compileComponents();

    router = TestBed.get(Router);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'E-Wallet'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('E-Wallet');
  });

  it('should have navigation bar component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const navigationBarComponent = fixture.debugElement.query(By.directive(NavigationBarComponent));

    expect(navigationBarComponent).toBeTruthy();
  });

  it('should have router outlet component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const navigationBarComponent = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(navigationBarComponent).toBeTruthy();
  });

  it('should navigate the url to /dashboard url', fakeAsync(() => {
    router.navigate(['/dashboard'])
      .then(() => {
        expect(router.url).toEqual('/dashboard');
      });
  }));

  it('should navigate the url to /transaction url', fakeAsync(() => {
    router.navigate(['/transaction'])
      .then(() => {
        expect(router.url).toEqual('/transaction');
      });
  }));

});
