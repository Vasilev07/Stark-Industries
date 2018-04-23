import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job';
import { CareersService } from '../core/careers.service';

@Component({
  selector: 'app-careers',
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
