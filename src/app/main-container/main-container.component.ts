import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Serial } from "../serial";

@Component({
    selector: "app-main-container",
    templateUrl: "./main-container.component.html",
    styleUrls: ["./main-container.component.css"],
    providers: [DataService]
})

export class MainContainerComponent implements OnInit {

    serials: Serial[] = [];
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.serials = this.dataService.getData();
    }
    
}