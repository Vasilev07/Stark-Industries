import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'stark-careers-view',
  templateUrl: './careers-view.component.html',
  styleUrls: ['./careers-view.component.css']
})
export class CareersViewComponent implements OnInit {
  @Input()
  public job: Job;
  
  constructor() { }

  ngOnInit() {
  }

}
