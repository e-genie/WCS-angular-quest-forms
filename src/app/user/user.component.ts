import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  address = new FormControl('');

  submitted = false;
  user = new User('', '', '', '');

  Submit(): void {
    this.submitted = true;

    (this.user.username = this.username.value),
      (this.user.email = this.email.value),
      (this.user.password = this.password.value),
      (this.user.address = this.address.value);

    console.log(this.user);
  }
}
