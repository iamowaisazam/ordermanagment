import {ChangeDetectionStrategy, Component, Inject, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatDialogModule,
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AddUserComponent {

  myForm:FormGroup;
 

  // constructor(
  //   public dialogRef: MatDialogRef<DialogContentComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) { }

  constructor(
    private db:FirebaseService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {

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


      this.dialogRef.close();

  }

  cancelForm() : void {

      // alert('form clear');
      this.dialogRef.close();
  }

}
