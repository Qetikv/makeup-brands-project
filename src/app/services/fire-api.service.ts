import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { MakeupBody, MakeupWithId } from '../content/models/content.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireApiService {
  constructor(private store: AngularFirestore) {}

  addMakeup(body: MakeupBody) {
    return from(this.store.collection('content').add(body));
  }

  // getMovie(): Observable<MakeupWithId[]> {
  // return this.store.collection<MakeupBody>('catalogue',(ref) => ref.where('uid','==', this.auth.userId))
  // .get()
  // .pipe(map(res => res.docs.map<MakeupWithId>(d) => {{...AngularFirestore.data(), id: d.id}})
}
