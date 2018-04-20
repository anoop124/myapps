import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { UserComponent } from './user/user.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from' ;


describe('AppComponent', () => {
  let app:AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        UsersService
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
     app = fixture.debugElement.componentInstance;
    app.users=[{ "name":"Test","email":"test@gmail" ,"address":{"city":"toronto"}} ,
              { "name":"Test1","email":"test1@gmail" ,"address":{"city":"calgary"}}
              ] ;
  }));

  it('should create the app', async(() => {
   
    expect(app).toBeTruthy();
  }));
  it('validate duplicate city', async(() => {
    
    app.onNotify("toronto");
    expect("This City Alreday Exist in Web Api").toBe( app.errorMsg) ;
  }));

  it('validate unique city', async(() => {
    
    app.onNotify("Northyork");
    expect("").toBe( app.errorMsg) ;
  }));

  it('validate empty input', async(() => {
   
    app.onNotify("");
    expect("").toBe( app.errorMsg) ;
  }));

});
