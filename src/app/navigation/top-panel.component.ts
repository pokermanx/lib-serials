import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css', './toggle.style.css']
})

export class TopPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 darkTheme = false;

  onDarkTheme(){
    if(this.darkTheme === false){
      document.getElementsByTagName('html')[0].classList.replace('ligth-theme', 'dark-theme'); 
      this.darkTheme = true;
    } else {
      document.getElementsByTagName('html')[0].classList.replace('dark-theme', 'ligth-theme');
      this.darkTheme = false;
    }
  }
}
