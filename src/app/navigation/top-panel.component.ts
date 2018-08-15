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
      document.getElementsByTagName('html')[0].className = '';
      document.getElementsByTagName('html')[0].classList.add('dark-theme');
      this.darkTheme = true;
    } else {
      document.getElementsByTagName('html')[0].className = '';
      document.getElementsByTagName('html')[0].classList.add('ligth-theme');
      this.darkTheme = false;
    }
  }
}
