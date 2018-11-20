
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',    
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public booksData: any;

  constructor(public _http : HttpClient) { 
    
  }
  getAllBooks()
  {   
     return this._http.get<any>("http://localhost:3000/books");
  }
  addBook(bookItem){
        console.log("add book in service");
        var newData = bookItem;
        // {
        //   "id":462,
        //   "isbn": "9781593275846",
        //   "subtitle": "A Modern Introduction to Programming",
        //   "published": "2014-12-14T00:00:00.000Z",
        //   "publisher": "No Starch Press",
        //   "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        //   "category": "Technology",
        //   "availibity": "Available",
        //   "author": "Marguerite Yourcenar",
        //   "country": "France/Belgium",
        //   "imageLink": "images/memoirs-of-hadrian.jpg",
        //   "language": "French",
        //   "website": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
        //   "pages": 408,
        //   "title": "Memoirs of Hadrian",
        //   "year": 1951
        //  }
        return this._http.post("http://localhost:3000/books", newData, httpOptions); 
  }
}
