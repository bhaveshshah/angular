import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../../core/services/request.service';

import {} from '@angular/common/http';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss'],
  providers: []
})
export class ShowUserComponent implements OnInit {
  userData: any;
  constructor(private route: ActivatedRoute, private req: RequestService) {}

  ngOnInit() {
    // console.log(this.route.snapshot.paramMap.get('page'));
    this.route.paramMap.subscribe((params) => {
      this.req.getUser(+params.get('page')).subscribe((value) => {
        this.userData = value['data'];
      });
    });
  }
}
