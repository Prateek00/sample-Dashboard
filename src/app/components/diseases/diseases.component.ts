import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface PeriodicElement {
  epidemic: string;
  children: String;
  senior: string;
  adult: String;
  //qunatity:number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {epidemic: 'Cholera', children: 'ciprofloxacin(1200)', senior: 'Quinine(3300)', adult: 'loperamide(3600)'},
  {epidemic: 'Dengue', children: 'Acetaminophen(2500)',  senior: 'acetaminophen(2400)', adult: 'intravenous(2400)'},
  {epidemic: 'Diarrhea', children: 'loperamide(4000)',  senior: 'Quinine(3500)', adult: 'loperamide(4500)'},
  {epidemic: 'Malaria', children: 'Quinine(2900)',  senior: 'Quinine(1900)', adult: 'loperamide(3150)'},
  {epidemic: 'Leptospirosis', children: 'intravenous penicillin G(3100)',  senior: 'Quinine', adult: 'loperamide(2750)'},
  {epidemic: 'hepatitis A and E', children: 'acetaminophen(3400)',  senior: 'Quinine(2900)', adult: 'loperamide(2750)'},
  {epidemic: 'Chicken Pox (Varicella)', children: 'acetaminophen(3400)',  senior: 'Quinine(2900)', adult: 'loperamide(2750)'},
  {epidemic: 'Conjunctivitis (Pink-eye)', children: 'acetaminophen(3400)',  senior: 'Quinine(2900)', adult: 'loperamide(2750)'},
  {epidemic: 'Influenza', children: 'acetaminophen(3400)',  senior: 'Quinine(2900)', adult: 'loperamide(2750)'},
  {epidemic: 'Mumps', children: 'acetaminophen(3400)',  senior: 'Quinine(2900)', adult: 'loperamide(2750)'},
];


@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss']
})
export class DiseasesComponent implements OnInit {
  displayedColumns: string[] = ['epidemic', 'children', 'senior', 'adult'];
  constructor(public dialogRef: MatDialogRef<DiseasesComponent>,@Inject(MAT_DIALOG_DATA) public demography: any) { }
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
