import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { BookFilterPipe }from './pipes/filter.name';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatCheckboxModule } from '@angular/material';
import { DialogOverviewExampleDialog } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { DialogAddBookDialog } from './admin/admin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProductsComponent,
    BookComponent,
    BookFilterPipe,
    DialogOverviewExampleDialog,
    AdminComponent,
    DialogAddBookDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  entryComponents: [DialogOverviewExampleDialog, DialogAddBookDialog],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
