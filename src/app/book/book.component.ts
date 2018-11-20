import { Component, OnInit, Input, Inject, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  @Input() book : any;
  @Output() detail = new EventEmitter<void>();
  
  constructor() { }


  ngOnInit() {
  }
  
  openDetails()
  {
    this.detail.emit();
  }
 

}

