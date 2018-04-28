import { Component, Input, OnInit, DoCheck } from '@angular/core';

import { CareersService } from '../core/careers.service';
import { Job } from '../models/job';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'stark-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit,DoCheck {

 
  @Input()
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  filteredCategories: Job[] = [];
  date: string = '';
  byType:string = '';
  dateInput:string = '';
  search:string = '';
  selectedDate:number;
  
  constructor(private careerService: CareersService) { }

  ngOnInit() {
    this.careerService.getAll().subscribe((data) => {
      this.jobs = data;
    })
  }
  
  private onChange(): void {
    
    if (this.byType === '') {
      this.filteredCategories = this.jobs;
    } else {
      this.onChange
      this.filteredCategories = this.jobs.filter((jobCat) => jobCat.type === this.byType);
    }
  }

  private filterBySearch(): void {
    this.search = this.search.toLowerCase().trim();

    this.filteredJobs = this.jobs.filter((job) => job.title.toLowerCase().indexOf(this.search)>=0 
    || job.type.toLowerCase().indexOf(this.search)>=0 
    || job.description.toLowerCase().indexOf(this.search)>=0);
  }

  private dateChange(date: MatDatepickerInputEvent<Date>){
    this.selectedDate = new Date(this.date).setHours(0,0,0,0);
    console.log(this.selectedDate);
  }
  ngDoCheck(): void {
    this.filterBySearch();
  }
  
}
