import { Component, OnInit, Output, NgModule } from '@angular/core';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-add-new-page',
  templateUrl: './add-new-page.component.html',
  styleUrls: ['./add-new-page.component.css'],
})
export class AddNewPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  AddNewSerialOut(title: string, description: string, imgUrl: string){
    this.dataService.AddNewSerialIn(title, description, imgUrl)
  }

  ngOnInit() {
  }

}
