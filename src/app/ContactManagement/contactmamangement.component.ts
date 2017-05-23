import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
declare let jQuery:any;

@Component({
  selector: 'app-contactmamangement',
  templateUrl: './contactmamangement.component.html',
  styleUrls: ['./contactmamangement.component.css']
})
export class ContactManagementComponent implements OnInit {

   private columnUrl:string = './../../TestData/column.json';
   private rowUrl:string = './../../TestData/rows.json';
  constructor(private _http:Http) { }

  ngOnInit() {

         //this._http.get(this.columnUrl);  
    jQuery(function($){
	$('.table').footable({

    "columns":[],
    "rows":[]
  });
});
  }

}
