import {Component, OnInit} from '@angular/core';
import {Book} from "./book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;

  constructor() {
    this.book = new Book("JavaScript", "Some author", 2017, "Book description");
  }

  ngOnInit() {
  }

}
