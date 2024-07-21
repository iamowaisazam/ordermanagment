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
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';




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
    MatIconModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {

  readonly dialog = inject(MatDialog);

  displayedColumns:any = [
    'key',
    'name', 
    'email',
    'action',
  ];

  dataSource: any = [
    
  ];


  /**
   *
   */
  constructor(private db:FirebaseService,private _snackBar: MatSnackBar) {

    this.getUsrs();


  }


 async getUsrs(){

      let data = await this.db.getAllUsers()
      let tabledata :any = [];

      data.forEach((element,key) => {

        tabledata.push({
            id: element.id,
            key:key + 1,
            name: element.name, 
            email: element.email,
        });

      });

      this.dataSource = tabledata;

  }

  async deleteUser(id:string){

      let res:any = await this.db.deleteUser(id);
      if(res){
        
        this._snackBar.open('User Deleted Succesfully', 'X', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 3000,
          panelClass: ['custom-snackbar-success']
        });

        this.getUsrs();

      }else{

        this._snackBar.open('User Deleted Succesfully', 'X', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 3000,
          panelClass: ['custom-snackbar-success']
        });

      }

  }

  openDialog() {

        const dialogRef = this.dialog.open(AddUserComponent,{
          width:'500px'
        });
        dialogRef.afterClosed().subscribe(result => {

          if(result){
              this._snackBar.open('New User Added', 'X', {
                horizontalPosition: 'end',
                verticalPosition: 'top',
                duration: 3000,
                panelClass: ['custom-snackbar-success']
              });
              this.getUsrs();
          }

        });

  }


async editDialog(id:any) {

      let data = await this.db.editUser({id});
      if(data){
        const dialogRef = this.dialog.open(EditUserComponent,{
          width:'500px',
          data:data,
        });
        
        dialogRef.afterClosed().subscribe(result => {
          this.getUsrs();
        });
      }
       
}


}