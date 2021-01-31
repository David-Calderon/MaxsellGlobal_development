import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestRegisterService {

  private collectionName = "solicitud_usuario";

  constructor( private firestore : AngularFirestore) { }

  addRecord( record : any )
  {
    return this.firestore.collection(this.collectionName).add(record);
  }

  getRecords()
  {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
}
