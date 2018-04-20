import {Address} from './address.model';
export class User {

  constructor(
    public name?: string,
    public email?: string ,public address?:Address) {
  }
}
