import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: any = {
     "title" : "JavaScript",
     "author" : "Some author",
     "year" : "2017",
     "description" : "Book description"
  };

  constructor() { }

  ngOnInit() {
  }

}
