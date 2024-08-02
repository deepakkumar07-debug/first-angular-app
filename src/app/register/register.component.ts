import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      hobbies: this.fb.group({
        reading: [false],
        traveling: [false],
        cooking: [false],
      }),
      country: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  saveRegisterForm(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
    }
  }
}
