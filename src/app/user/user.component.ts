import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userForm = this.fb.group({
    username: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      zipCode: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  submitted = false;

  users: any[] = [];

  onSubmit() {
    // Ajoute les données du formulaire au tableau users
    this.users.push(this.userForm.value);

    // Réinitialise le formulaire
    this.userForm.reset();

    this.submitted = true;
    console.log(this.userForm.value);
  }
}
