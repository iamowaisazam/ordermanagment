import {ChangeDetectionStrategy, Component, Inject, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseService } from '../../services/firebase.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   myForm:FormGroup;

   base_url:any;

  constructor(
    private db:FirebaseService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {

    this.base_url = environment.asset_url;

    this.myForm = this.fb.group({
      email: ['iamowaisazam@gmail.com', [Validators.required, Validators.email]],
      password: ['owais123', [Validators.required]]
    });

  }


  
  onSubmit() {

    if (this.myForm.valid) {

      this.db.login(this.myForm.value.email,this.myForm.value.password)
      .then((response) =>{

            this._snackBar.open('Logged In Successfully', 'Close',{
              horizontalPosition: 'end',
              verticalPosition: 'top',
              duration: 3000,
              panelClass: ['custom-snackbar-success']
            });

            this.router.navigate(['/admin/dashboard']);


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
