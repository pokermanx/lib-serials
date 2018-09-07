import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { ActivatedRoute } from '@angular/router';
import { Serial } from "../serial";

@Component({
  selector: 'app-serial-info',
  templateUrl: './serial-info.component.html',
  styleUrls: ['./serial-info.component.css'],
  providers: [DataService]
})
export class SerialInfoComponent implements OnInit {

  serials: Serial[] = [];
  
  id: number;
  constructor(private dataService: DataService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
      this.serials = this.dataService.getData();      
  }
}
