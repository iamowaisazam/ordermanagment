import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,

  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {

  displayedColumns:any = [
    'id',
    'name', 
    'email', 
    'phone', 
    'created_at'];

  dataSource: any = [
    {
      id: 1,
      name: 1, 
      email: 'Hydrogen', 
      phone: 'H',
      created_at: 'H',
      password: 1.0079, 
    },
  ];

  myForm:FormGroup;

  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['Owais Azam', Validators.required],
      email: ['iamowaisazam@gmail.com', [Validators.required, Validators.email]],
      password: ['owais123', [Validators.required]]
    });
  }


  onSubmit() {

    alert('Form Not Submited');

    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);

      this.dataSource.push({
        'name':'string',
        'position': 1,
        'weight': 1,
        'symbol': 'string',
      });
      this.dataSource = [...this.dataSource]; 


    } else {
      console.log('Form Submitted!', this.myForm);
    }
  }

  clearForm() {

  }
  

}
