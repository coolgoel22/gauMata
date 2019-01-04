import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  private gavySidh: Object;
  
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      let data = JSON.parse(params.data);
      this.gavySidh = data;
    })
   }

  ngOnInit() {
  }

}
