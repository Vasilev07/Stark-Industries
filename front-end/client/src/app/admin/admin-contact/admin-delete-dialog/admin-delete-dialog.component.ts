import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'stark-admin-delete-dialog',
  templateUrl: './admin-delete-dialog.component.html',
  styleUrls: ['./admin-delete-dialog.component.css'],
})
export class AdminDeleteDialogComponent {

    constructor(private dialogRef: MatDialogRef<AdminDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: boolean) { }

    public onAccept(): void {
        this.dialogRef.close(true);
    }

    public onCancel(): void {
        this.dialogRef.close(false);
    }
    public onNoClick(): void {
        this.dialogRef.close(false);
      }
}
