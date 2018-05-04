import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareersService } from '../../../core/careers.service';
import { AdminJobsService } from '../../../core/admin-services/admin-job.service';

@Component({
  selector: 'stark-all-applications',
  templateUrl: './all-applications.component.html',
  styleUrls: ['./all-applications.component.css']
})
export class AllApplicationsComponent implements OnInit {

  constructor(private activatedRouted: ActivatedRoute, private adminJobsService: AdminJobsService) { }

  ngOnInit() {
    this.activatedRouted.params.subscribe((param)=>{
      console.log(param.id)
      this.adminJobsService.getAllApplications(param.id).subscribe((data)=>{
        console.log(data);
      })
    });
  }

}
