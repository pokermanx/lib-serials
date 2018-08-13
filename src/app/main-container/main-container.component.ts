import { Component, OnInit } from "@angular/core";
import {AngularFireDatabase} from 'angularfire2/database';


const serials = [
  {
      title: "strager things",
      image: "https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg",
      favorite: true
  },
  {
      title: "true detective",
      image: "https://www.hbo.com/content/dam/hbodata/series/true-detective/episodes/01/true-detective-s1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
      favorite: false
  },
  {
      title: "the breaking bad",
      image: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB_S5B_004_L.jpg",
      favorite: true
  },
  {
      title: "game of thrones",
      image: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg",
      favorite: true

  },
  {
      title: "the end of the f***ing world",
      image: "https://41zxbw463fq733z1kl101n01-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/end-hed-750x430.jpg",
      favorite: false
  },
  {
      title: "the big bang theory",
      image: "https://images.justwatch.com/backdrop/458885/s1440/the-big-bang-theory",
      favorite: false
  },
  {
      title: "the walking dead",
      image: "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/10/TWDDeathNeganH2016.jpg",
      favorite: false
  }
];

@Component({
  selector: "app-main-container",
  templateUrl: "./main-container.component.html",
  styleUrls: ["./main-container.component.css"]
})
export class MainContainerComponent implements OnInit {

  ngOnInit() {}
  constructor() {}

  serials = serials;

}