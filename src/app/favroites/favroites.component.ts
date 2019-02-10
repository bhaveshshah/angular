import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favroites',
  templateUrl: './favroites.component.html',
  styleUrls: ['./favroites.component.scss']
})
export class FavroitesComponent implements OnInit {
  isLiked: boolean;
  constructor() { }

  ngOnInit() {
    this.isLiked = false;
  }

  toggleFavroite() {
    this.isLiked = !this.isLiked;
  }

}
