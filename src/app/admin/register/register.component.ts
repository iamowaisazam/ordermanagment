import {ChangeDetectionStrategy, Component, Inject, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule  } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseService } from '../../services/firebase.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    MatButtonModule, 
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

   base_url:any;
   myForm:FormGroup;

  constructor(
    private db:FirebaseService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
  ) {

    this.base_url = environment.asset_url;

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

   
  
  }

 async onSubmit() {

    if (this.myForm.valid) {

      const {email,password,name} = this.myForm.value;
      this.db.register(email,password,name)
      .then((response) => {

          this._snackBar.open('Registeration Successfully Now You Can Logged In', 'Close',{
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['custom-snackbar-success']
          });

          this.myForm.reset();

      }).catch((error) => {

          this._snackBar.open(error.code, 'Close',{
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['custom-snackbar-error']
          });
        
      });

    } else {
      this._snackBar.open("Form Validation Failed", 'Close',{
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['custom-snackbar-error']
      });
    }


}

cancelForm() : void {

    
}


}
