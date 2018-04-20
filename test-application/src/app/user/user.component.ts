import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { FormGroup, FormBuilder, FormControl ,AbstractControl,ValidationErrors,Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userForm: FormGroup;
  private _user: User;
 
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  get user(): User {
    return this._user;
  }
  @Input()
  set user(newUser: User) {
    console.log("Inside set User");
    this._user = newUser;
    this.buildUserForm(newUser);
  }

  constructor(private formBuilder: FormBuilder) {
   
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'name': new FormControl(''),
      'email': new FormControl(),
      'address':this.formBuilder.group({ 'city':new FormControl( '',Validators.required)})
    });
  }

  buildUserForm(user: User) {
    if (user) {
      console.log(user) ;
       this.userForm.patchValue(user) ;
    }
  }

  validateCity(city) {
    console.log("city>>>inside Validator>>"+city);
    this.notify.emit(city);
  }

  get city(){
    return this.userForm.get('address.city');
  }

}
