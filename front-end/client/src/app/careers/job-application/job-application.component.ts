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
import {
  ToastrService
} from 'ngx-toastr';
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
  public loading: boolean = false;
  private minLength: number = 3;
  private maxLength: number = 100;
  private commentMaxLength: number = 1024;
  constructor(private toastr: ToastrService, private careerService: CareersService, private el: ElementRef, private router: Router, private route: ActivatedRoute, private authService: AuthService, private formBuilder: FormBuilder) {}

  public firstName: string;
  public lastName: string;
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.firstName = this.authService.userName().firstName;
    this.lastName = this.authService.userName().lastName;

    this.applicationForm = this.formBuilder.group({
      firstName: this.formBuilder.control({
        value: '',
        disabled: true
      }, [Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
      lastName: this.formBuilder.control({
        value: '',
        disabled: true
      }, [Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
      comment: ['', [Validators.required, Validators.maxLength(this.commentMaxLength)]],
      cv: ['', [Validators.required, ]],
      coverLetter: ['', [Validators.required, ]],
    });
  }

  public apply(userInput) {
    const userApplicationObject = this.appendValues();
    this.loading = true;
    this.careerService.createNewApplication(userApplicationObject, this.id).subscribe(
      (res) => {
        console.log('Success');
      },
      (err: HttpErrorResponse) => {
        console.log('Fail');
      });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  public onUpload(event: any): void {

    // console.log(this.applicationForm)
    if (event.currentTarget.files.length > 0) {
      const file = event.target.files[0];
      if (!this.validateExtention(file.name) && !this.validateFileSize(file.size)) {
        this.toastr.error('Files must be of type pdf, doc or docx and not bigger than 16MB!', 'Invalid File', {
          timeOut: 5000
        });
      } else {
        this.applicationForm.get(event.currentTarget.id).setValue(file);
        this.toastr.success(`Successfull uploaded file ${file.name}`);
      }
    }
  }

  private appendValues(): FormData {
    const userInput = new FormData();
    userInput.append('cv', this.applicationForm.get('cv').value);
    userInput.append('coverLetter', this.applicationForm.get('coverLetter').value);
    userInput.append('comment', this.applicationForm.get('comment').value);
    return userInput;
  }

  private validateExtention(fileFullName: string): boolean {
    let fileExtention = fileFullName.substr(fileFullName.lastIndexOf('.'));
    if (fileExtention === '.pdf' || fileExtention === '.doc' ||
      fileExtention === '.docx') {
      return true;
    }
    return false;
  }

  private validateFileSize(fileSize: number) {
    const fileSizeInKb = fileSize / 1024;
    if (fileSizeInKb >= 16000) {
      return false;
    }
    return true;
  }
}
