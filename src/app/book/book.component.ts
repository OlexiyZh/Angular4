import {Component, OnInit} from '@angular/core';
import {Book} from "./book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  charNumber: number;

  book: Book;

  books: Array<Book>;

  isJavaScript(book: Book): boolean {
     return book.title.toUpperCase().indexOf("JAVASCRIPT") != -1;
  }

  constructor() {
    this.books = new Array<Book>();
    this.books.push(new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008,
      "This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable", 172));
    this.books.push(new Book("Mastering TypeScript", "Nathan Rozentals", 2015, "Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks", 364));
    this.books.push(new Book("Switching to Angular 2", "Minko Gechev", 2016, "Start using TypeScript to supercharge your Angular 2 applications", 254));
    //this.book = new Book("JavaScript", "Some author", 2017, "Book description");
  }

  ngOnInit() {
  }

  displayNumber(value: any): void {
    let text = value.toString();
    this.charNumber = text.length;
  }


}
