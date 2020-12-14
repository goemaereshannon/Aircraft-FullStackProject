import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public DialogMessage: string) {}

  ngOnInit(): void {}
}
