import { Injectable } from '@angular/core';
import { config } from "./app.config";
import { Contact } from "./app.model";

import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact: AngularFirestoreCollection<Contact>;
  private contactDoc: AngularFirestoreDocument<Contact>;

  constructor(private db: AngularFirestore) {
    this.contact = db.collection<Contact>(config.collection_endpoint);
  }

  addTask(task) {
    //Add the new task to the collection
    this.contact.add(task);
  } 

  updateTask(id, update) {
    //Get the task document
    this.contactDoc = this.db.doc<Contact>(`${config.collection_endpoint}/${id}`);
    this.contactDoc.update(update);
  }

  deleteTask(id) {
    //Get the task document
    this.contactDoc = this.db.doc<Contact>(`${config.collection_endpoint}/${id}`);
    //Delete the document
    this.contactDoc.delete();
  }
}
