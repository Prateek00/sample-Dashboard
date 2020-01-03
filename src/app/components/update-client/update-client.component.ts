import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<UpdateClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    
  }
  
  ngOnInit() {
    
  }

  cancel(): void {
    this.dialogRef.close();
  }

  update(){
    this.dialogRef.close(this.data);
  }

}
