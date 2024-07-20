import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs, doc,getDoc,getFirestore, deleteDoc, updateDoc  } from "firebase/firestore";

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

  async editUser(data: any): Promise<any> {
    // try {
      const userDoc = doc(this.db, "users",data.id);
      const userSnapshot = await getDoc(userDoc);
      if (userSnapshot.exists()) {
        return {  ...userSnapshot.data(), id: userSnapshot.id };
      } else {
        console.log("No such document!");
        return null;
      }
    // } catch (e) {
    //   console.error("Error getting document: ", e);
    //   alert("Error while getting document");
    //   return null;
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

  async updateUser(docId: string, data: any) {

    // try {
    
      const userDoc = doc(this.db, "users", docId);
      await updateDoc(userDoc, data);

      console.log("Document successfully updated!");
      return true;

    // } catch (e) {
      
      // console.error("Error updating document: ", e);
      // alert("Error while updating");
      // return false;
    // }
  }


}
