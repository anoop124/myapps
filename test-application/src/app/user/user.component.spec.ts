import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { User } from '../user.model';
import { Address } from '../address.model';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and test', () => {
    expect(component).toBeDefined();
  });


  it('Verify City Population', async(() => {
    // when
    component.user  = new User('John' ,"test@gmail.com",new Address('toronto'));
    fixture.detectChanges();
    // given
    const compiled = fixture.debugElement.nativeElement;
    // then
    expect(compiled.querySelector('#city').value).toMatch('toronto');
  }));
  it('Verify City mandatory', async(() => {

    let cityControl = component.userForm.get('address.city') ;
    cityControl.setValue('');
    expect(cityControl.valid).toBeFalsy();
   
  }));

  it('should display user name', async(() => {
    // when
    component.user  = new User('John' ,"test@gmail.com",new Address('toronto'));
    fixture.detectChanges();
    // given
    const compiled = fixture.debugElement.nativeElement;
    // then
    expect(compiled.querySelector('#name').value).toMatch('John');
  }));

});
