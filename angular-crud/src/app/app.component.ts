import { Component, OnInit } from '@angular/core';
import { AngularFirestore,
  AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ContactService } from "./app.service";
import { config } from "./app.config";
import { Contact } from './app.model';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contacts';
  //contacts: Observable<any[]>;

  constructor(private db: AngularFirestore, private contactService: ContactService) {
    //this.contacts = this.db.collection("contacts").valueChanges();
  }

  contacts: Observable<any[]>;
  ngOnInit() {
    //this.tasks = this.db.collection(config.collection_endpoint).valueChanges();
    this.contacts = this.db
      .collection(config.collection_endpoint)
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
            //Get document data
            const data = a.payload.doc.data() as Contact;
            //Get document id
            const id = a.payload.doc.id;
            //Use spread operator to add the id to the document data
            return { id, ...data };
          }) //actions.map
        )//map
      );//pipe
  }
 




  myContact: string;
  editMode: boolean = false;
  taskToEdit: any = {};

  editContact(contact) {
    console.log(contact);
    //Set taskToEdit and editMode
    this.taskToEdit = contact;
    this.editMode = true;
    //Set form value
    this.myContact = contact.firstname;
  } //edit

  saveContact() {
    if (this.myContact !== null) {
       //Get the input value
       let task = {
          firstname: this.myContact
       };
       if (!this.editMode) {
          console.log(task);
          this.contactService.addTask(task);
       } else {
          //Get the task id
          let taskId = this.taskToEdit.id;
          //update the task
          this.contactService.updateTask(taskId, task);
       }
       //set edit mode to false and clear form
       this.editMode = false;
       this.myContact = "";
    }
  } //saveTask

  deleteContact(task) {
    //Get the task id
    let taskId = task.id;
    //delete the task
    this.contactService.deleteTask(taskId);
  } //deleteTask
}
