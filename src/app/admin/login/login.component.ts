import {ChangeDetectionStrategy, Component, Inject, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule, 
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   myForm:FormGroup;

  constructor(
    private db:FirebaseService,
    private fb: FormBuilder
  ) {

    this.myForm = this.fb.group({
      name: ['Owais Azam', Validators.required],
      email: ['iamowaisazam@gmail.com', [Validators.required, Validators.email]],
      password: ['owais123', [Validators.required]]
    });

  }


  
  onSubmit() {

    if (this.myForm.valid) {
      
      this.db.createUser(this.myForm.value);

    } else {
      console.log('Form Submitted!', this.myForm);
    }



}

cancelForm() : void {

    
}


}
