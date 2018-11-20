import { BookService } from './../book.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { validateConfig } from '@angular/router/src/config';
import { Book } from '../models/book.model';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public ser : BookService, public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  // addBook()
  // {
  //   this.ser.addBook().subscribe(data => {alert("Succesfully Added Product details")},Error => {alert("failed while adding product details")})
  // }

  openAddBookDialog(): void {
    const dialogRef = this.dialog.open(DialogAddBookDialog, {
      width: '100%',
      height: '100%',
      // data: {name: 'amit', animal: 'rabbit'}
      data: ""
    });
    //console.log("after open");

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');      
    });
  }

}



@Component({
  selector: 'dialog-addbook-dialog',
  templateUrl: 'dialog-addbook-dialog.html',
})
export class DialogAddBookDialog {

  bookItem: Book = new Book();
  isbn: string="";
  subtitle: string="";
  published: string="";
  publisher: string="";
  description: string="";
  category: string="Technology";
  availability: string="Available";
  author: string="";
  country: string="";
  imageLink: string="";
  language: string="";
  website: string="";
  pages: number=0;
  title: string="";
  year: number=1900;

  constructor(public ser : BookService,
    public dialogRef: MatDialogRef<DialogAddBookDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addBook()
  {    
    if(this.validateAddBookForm())
    {      
      this.bookItem.isbn=this.isbn;
      this.bookItem.title=this.title;
      this.bookItem.author=this.author;
      this.bookItem.published=this.published;
      this.bookItem.publisher=this.publisher;
      this.bookItem.year=this.year;
      this.bookItem.category=this.category;
      this.bookItem.country=this.country;
      this.bookItem.availability=this.availability;
      this.bookItem.imageLink=this.imageLink;
      this.bookItem.website=this.website;
      this.bookItem.pages=this.pages;
      this.bookItem.description=this.description;
      this.bookItem.subtitle=this.subtitle;
      
      this.ser.addBook(this.bookItem).subscribe(data => {alert("Succesfully Added Product details")},Error => {alert("failed while adding product details")})
    }
    else {
      console.log("Data Validation Failed");
    }

    
  }
  clearForm()
  {
    this.isbn="";
    this.title="";
    this.author="";
    this.published="";
    this.publisher="";
    this.year=1900;
    this.category="Technology";
    this.country="";
    this.availability="Available";
    this.imageLink="";
    this.website="";
    this.pages=0;
    this.description="";
    this.subtitle="";
  }
  validateAddBookForm()
  {
    if(this.title=="" || this.title=="undefined" || this.title==undefined ){        
      console.log("validation failed at -title"); 
      return false;
    }    
    else if(this.isbn=="" || this.isbn=="undefined" || this.isbn==undefined ){      
      console.log("validation failed at -isbn");
      return false;
    }
    else if(this.author=="" || this.author=="undefined" || this.author==undefined ){
      console.log("validation failed at -author ");
      return false;
    }   
    else
    {
      return true;
    }
  }
}
