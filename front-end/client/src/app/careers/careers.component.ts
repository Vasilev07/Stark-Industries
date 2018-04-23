import { Component, Input, OnInit } from '@angular/core';

import { CareersService } from '../core/careers.service';
import { Job } from '../models/job';

@Component({
  selector: 'stark-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  @Input()
  jobs: Job[];
  
  constructor(private careerService: CareersService) { }

  ngOnInit() {
    this.careerService.getAll().subscribe((data) => {
      this.jobs = data;
    })
  }
}
