import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { MakeupBody } from '../content/models/content.model';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root',
})
export class FireApiService {

constructor(private store: AngularFirestore) {
}

addMakeup(body: MakeupBody) {
  return from(this.store.collection('content').add(body));
}


}
