import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit{

  formGroup!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CustomerFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required ,Validators.email]],
      gender: [null, [Validators.required]],
      birthDate: [null, [Validators.required]]
    });
  }

  closeForm(): void {
    this.dialogRef.close();
  }

  validateBirthDate(): void {
    if(!this.isDateValid(this.formGroup.get('birthDate')?.value)) {
      this.snackBar.open('Data de nascimento inválida!' , 'Erro', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      this.formGroup.get('birthDate')?.reset();
    }
  }

  isDateValid(date: any): boolean {
    let dateString: string = date.toString();
    let day: number = parseInt(dateString[0] + dateString[1]);
    let month: number = parseInt(dateString[2] + dateString[3]);
    let year: number = parseInt(dateString[4] + dateString[5] + dateString[6] + dateString[7]);

    let dateToValidate: Date = new Date(year, month, day);
    return dateToValidate.getFullYear() === year && dateToValidate.getMonth() === month && dateToValidate.getDate() === day;
  }



}
