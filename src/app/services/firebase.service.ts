import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs, doc,getDoc,getFirestore, deleteDoc  } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private db?: any

  constructor() { 

    this.db = getFirestore();
  }

  async createUser(data:any)  {
    // try {

      data.id = Date.now().toString(36) + Math.random().toString(36).substr(2);

      const docRef = await addDoc(collection(this.db, "users"),data);

      console.log("Document written with ID: ", docRef.id);

      
    // } catch (e) {
    //    console.error("Error adding document: ", e);
    //    alert("error while creating")
    // }

  }

  async getAllUsers() {
    let result: any[] = []
    const querySnapshot = await getDocs(collection(this.db, "users"));
    querySnapshot.forEach((doc) => {
      result.push({  ...doc.data() , id: doc.id })
    });
    return result
  }

  async deleteUser(docId: string) {
    // try {

     await deleteDoc(doc(this.db, "users", docId));
      return true;
 
      // console.log("Document successfully deleted!");
    // } catch (e) {
      // console.error("Error removing document: ", e);
      // alert("Error while deleting");
    // }
  }


}
