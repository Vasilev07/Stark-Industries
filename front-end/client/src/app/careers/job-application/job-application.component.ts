import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  CareersService
} from '../../core/careers.service';
import {
  ActivatedRoute,
  Router,
  Params
} from '@angular/router';
import {
  AuthService
} from '../../core/auth.service';
import {
  MatInputModule,
  MatFormField,
  MatFormFieldControl
} from '@angular/material';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  HttpErrorResponse
} from '@angular/common/http';
import {
  FileUploader
} from '../../../../node_modules/ng2-file-upload/ng2-file-upload';
@Component({
  selector: 'stark-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  public applicationForm: FormGroup;
  @ViewChild('cv') public cv: ElementRef;
  @ViewChild('coverLetter') public coverLetter: ElementRef;
  public id: number;
  private minLength: number = 3;
  private maxLength: number = 100;
  private commentMaxLength: number = 1024;
  constructor(private careerService: CareersService, private el: ElementRef, private router: Router, private route: ActivatedRoute, private authService: AuthService, private formBuilder: FormBuilder) {}

  public firstName: string;
  public lastName: string;
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.firstName = this.authService.userName().firstName;
    this.lastName = this.authService.userName().lastName;
    console.log(this.authService.userName());

    this.applicationForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      lastName: ['', [Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      comment: ['', [Validators.required, Validators.maxLength(this.commentMaxLength)]],
      cv: ['', []],
      coverLetter: ['', []],
    });
  }

  public apply(userInput) {
    // console.log(userInput);

    const userApplicationObject = {
      cv: userInput.cv,
      // coverLetter: userInput.coverLetter,
      comment: userInput.comment
    }
    console.log(userApplicationObject);
    this.careerService.createNewApplication(userApplicationObject, this.id).subscribe(
      (res) => {
        console.log('Success');
      },
      (err: HttpErrorResponse) => {
        console.log('Fail');
      });
  }

  public onUpload(event: any): void{
    // console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file)
      // this.cv.nativeElement.value = file;
      // this.coverLetter.nativeElement.value = file;
      // console.log(this.cv.nativeElement.setValue(file))
      // console.log(this.coverLetter.nativeElement.setValue(file))
      this.applicationForm.controls['cv'].setValue(file);
      // this.applicationForm.controls['coverLetter'].setValue(file);
      // console.log(this.applicationForm.get('CoverLetter').setValue(file))
    }
  }
}
