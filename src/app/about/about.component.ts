import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    //dependency injection
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {}
}
