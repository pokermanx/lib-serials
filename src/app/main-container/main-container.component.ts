import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Serial } from "../serial"; 
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
    selector: "app-main-container",
    templateUrl: "./main-container.component.html",
    styleUrls: ["./main-container.component.css"],
    providers: [DataService]
})

export class MainContainerComponent implements OnInit {

    // serials: Serial[] = [];
    // constructor(private dataService: DataService) {}
    // serials : Observable<any[]>;
    user = null;
    serials: AngularFireList<{}>;
    constructor(
        private auth: AuthService,
        public db: AngularFireDatabase) {}
    ngOnInit() {
        this.auth.getAuthState().subscribe(
          (user) => this.user = user);
        this.serials = this.db.list('serials');
        console.table(this.serials)
      }
    loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
    
}