import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/auth.service';
import { CareersService } from '../../core/careers.service';


@Component({
    selector: 'stark-job-application',
    templateUrl: './job-application.component.html',
    styleUrls: ['./job-application.component.css'],
})
export class JobApplicationComponent implements OnInit {

    public applicationForm: FormGroup;
    @ViewChild('cv') public cv: ElementRef;
    @ViewChild('coverLetter') public coverLetter: ElementRef;
    public id: number;
    public firstName: string;
    public lastName: string;
    private minLength: number = 3;
    private maxLength: number = 100;
    private commentMaxLength: number = 1024;
    constructor(
        private toastr: ToastrService,
        private careerService: CareersService,
        private el: ElementRef,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.firstName = this.authService.getUserName().firstName;
        this.lastName = this.authService.getUserName().lastName;

        this.applicationForm = this.formBuilder.group({
            firstName: this.formBuilder.control({
                value: '',
                disabled: true,
            }, [Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
            lastName: this.formBuilder.control({
                value: '',
                disabled: true,
            }, [Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]),
            comment: ['', [Validators.required, Validators.maxLength(this.commentMaxLength)]],
            cv: ['', [Validators.required]],
            coverLetter: ['', [Validators.required]],
        });
    }

    public apply(userInput: any): void {
        const userApplicationObject = this.appendValues();
        this.careerService.createNewApplication(userApplicationObject, this.id).subscribe(
            (res) => {
                this.toastr.success(`Successfull application`);
            },
            (err: HttpErrorResponse) => {
                this.toastr.error(`You have already applied for this job`);
            });

        setTimeout(() => {
            this.router.navigate(['/careers']);
        }, 1000);
    }

    public onUpload(event: any): void {
        if (event.currentTarget.files.length > 0) {
            const file = event.target.files[0];
            if (!this.validateExtention(file.name) || !this.validateFileSize(file.size)) {
                this.toastr.error('Files must be of type pdf, doc or docx and not bigger than 16MB!', 'Invalid File', {
                    timeOut: 5000,
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
        const fileExtention = fileFullName.substr(fileFullName.lastIndexOf('.'));
        if (fileExtention === '.pdf' || fileExtention === '.doc' ||
            fileExtention === '.docx') {
            return true;
        }
        return false;
    }

    private validateFileSize(fileSize: number): boolean {
        const fileSizeInKb = fileSize / 1024;
        if (fileSizeInKb >= 16000) {
            return false;
        }
        return true;
    }
}
