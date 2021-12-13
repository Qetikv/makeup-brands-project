import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  lastThreeSearches =['Avatar','Harry Poter', 'Godfather'];

  searchKey: string = '';
  searchHasError = false;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    if(!this.searchKey) {
      return;
    }
    console.log(this.searchKey);
  }

}
