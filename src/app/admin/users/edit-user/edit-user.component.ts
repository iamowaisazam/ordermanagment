import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FirebaseService } from '../../../services/firebase.service';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatDialogModule,
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUserComponent {

  myForm:FormGroup;

  constructor(

    private db:FirebaseService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {

      // console.log('====================================');
      console.log(this.data);
      // console.log('====================================');


    this.myForm = this.fb.group({
      name: [this.data.name, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      password: [this.data.password, [Validators.required]]
    });

  }


  onSubmit() {

      if (this.myForm.valid) {
         this.db.updateUser(this.data.id,this.myForm.value);
      } else {
        // console.log('Form Submitted!', this.myForm);
      }
      
      this.dialogRef.close();
  }

  cancelForm() : void {
      this.dialogRef.close();
  }


}
