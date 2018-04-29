import { Component, OnInit, Input } from '@angular/core';
import { CareersService } from '../../core/careers.service';
import { Job } from '../../models/job';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'stark-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  @Input()
  job: Job;

  jobDetail: Job;
  constructor(private carrerService: CareersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      console.log(param);
      this.carrerService.getById(+param.id).subscribe((data) => {
        this.jobDetail = data;
        console.log(this.jobDetail);
      })
    })
  }

}
