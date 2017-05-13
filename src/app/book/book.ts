export class Book {
   title: string;
   author: string;
   year: number;
   description: string;

  constructor(title: string, author: string, year: number, description: string) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.description = description;
  }
}
