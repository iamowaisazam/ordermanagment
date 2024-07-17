import { CommonModule } from '@angular/common';
import { Component ,inject} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { FirebaseService } from '../../services/firebase.service';




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

  readonly dialog = inject(MatDialog);

  displayedColumns:any = [
    'id',
    'name', 
    'email',
    'action',
  ];

  dataSource: any = [
    
  ];


  /**
   *
   */
  constructor(private db:FirebaseService) {

    this.getUsrs();

  }


 async getUsrs(){

      let data = await this.db.getAllUsers()

      let tabledata :any = [];
      data.forEach(element => {

        tabledata.push({
            id: element.id,
            name: element.name, 
            email: element.email,
          });

      });

      this.dataSource = tabledata;

  }

  async deleteUser(id:string){

      let res:any = await this.db.deleteUser(id);
      if(res){
        this.getUsrs();
      }

  }

  openDialog() {

        const dialogRef = this.dialog.open(AddUserComponent,{
          width:'500px'
        });
        dialogRef.afterClosed().subscribe(result => {
          this.getUsrs();
            // console.log(`Dialog result: ${result}`);
            // alert('Closed');
        });

  }







}
