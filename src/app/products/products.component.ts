import { BookService } from './../book.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public booksData :  any;
  search = {name:"", author:"", categories:[]}
  
  animal: string;
  name: string; 


  constructor(public ser : BookService, public dialog: MatDialog) {
        //console.log("in constructor");
        this.ser.getAllBooks().subscribe(res=>{
          this.booksData = res;
          //console.log(this.booksData);  
        }); 
        //console.log("got it");  
       this.search.categories=["Technology", "Business", "Fiction", "Management"];
   }

  ngOnInit() {
  }

  updatecategories(event) {

  // console.log(event.checked);
  
   if(event.checked)
   {
    var index = this.search.categories.indexOf(event.source.value); 
    if (index == -1) {
        this.search.categories.push(event.source.value);
      }
   }
   else if (!event.checked)
   {
    var index = this.search.categories.indexOf(event.source.value); 
    if (index > -1) {
      this.search.categories.splice(index, 1);
    }
   }
    //console.log(this.search.categories);
    
  }

  clearForm()
  {
    //console.log("clear form");
    this.search.name= "";
    this.search.author= "";    
  }

  // addBook()
  // {
  //   console.log("addBook Method");
  //   this.ser.addBook().subscribe(data => {alert("Succesfully Added Product details")},Error => {alert("failed while adding product details")})
  // }

  openDialog(b): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '1000px',
      height: '600px',
      // data: {name: 'amit', animal: 'rabbit'}
      data: b
    });
    //console.log("after open");

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');      
    });
  }
}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

