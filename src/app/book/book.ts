export class Book {
   title: string;
   author: string;
   year: number;
   description: string;
   pages: number;

  constructor(title: string, author: string, year: number, description: string, pages: number) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.description = description;
    this.pages = pages;
  }
}
