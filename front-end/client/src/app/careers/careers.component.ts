import {
  Component,
  Input,
  OnInit,
  DoCheck
} from '@angular/core';

import {
  CareersService
} from '../core/careers.service';
import {
  Job
} from '../models/job';
import {
  MatDatepickerInputEvent
} from '@angular/material';
import {
  EventEmitter
} from 'events';
import {
  type
} from 'os';

@Component({
  selector: 'stark-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit, DoCheck {


  @Input()
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  jobCategories = [];

  date: string = '';
  byType: string = '';
  search: string = '';

  selectedDate: number;

  constructor(private careerService: CareersService) {}

  ngOnInit() {
    this.careerService.getAll().subscribe((data) => {
      this.jobs = data;
      this.filteredJobs = data;
      this.filterRepeatingJobsCat();
    });
  }

  public filterRepeatingJobsCat() {
    this.jobCategories = this.jobs.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj.type).indexOf(obj.type) === pos;
    });
  }

  private onChange() {
    this.filteredJobs = this.jobs.filter((jobCat) => jobCat.type === this.byType);

    if (this.search) {
      this.filteredJobs = this.filteredJobs.filter((job) => job.title.toLowerCase().indexOf(this.search) >= 0 ||
        job.description.toLowerCase().indexOf(this.search) >= 0);
    }

    if (this.date) {
      this.filteredJobs = this.filteredJobs.filter((date) => {
        return new Date(date.createdAt).setHours(0, 0, 0, 0) <= this.selectedDate
      });
    }

  }

  private filterBySearch() {

    this.search = this.search.toLowerCase().trim();
    this.filteredJobs = this.jobs.filter((job) => job.title.toLowerCase().indexOf(this.search) >= 0 ||
      job.description.toLowerCase().indexOf(this.search) >= 0);

    if (this.date) {
      this.filteredJobs = this.filteredJobs.filter((date) => {
        return new Date(date.createdAt).setHours(0, 0, 0, 0) <= this.selectedDate
      });
    }

    if (this.byType) {
      this.filteredJobs = this.filteredJobs.filter((jobCat) => jobCat.type === this.byType);
    }
  }

  private dateChange(date: MatDatepickerInputEvent < Date > ) {
    this.selectedDate = new Date(this.date).setHours(0, 0, 0, 0);

    this.filteredJobs = this.jobs.filter((date) => {
      return new Date(date.createdAt).setHours(0, 0, 0, 0) <= this.selectedDate;
    });

    if (this.search) {
      this.filteredJobs = this.filteredJobs.filter((job) => job.title.toLowerCase().indexOf(this.search) >= 0 ||
        job.description.toLowerCase().indexOf(this.search) >= 0);
    }

    if (this.byType) {
      this.filteredJobs = this.filteredJobs.filter((jobCat) => jobCat.type === this.byType);
    }
  }

  public clearFilter(): void {
    this.search = '';
    this.date = '';
    this.byType = '';
    this.filteredJobs = this.jobs.slice();
  }
}
