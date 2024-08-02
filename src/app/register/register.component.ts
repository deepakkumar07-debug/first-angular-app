import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  saveRegisterForm(registerForm: any) {
    console.log('Register Form Value', registerForm.value);
  }
}
