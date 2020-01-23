import { Component, OnInit } from '@angular/core';
import { ServletService } from '../servlet.service';
import {MatDialog} from '@angular/material';
import { EditDriveComponent } from '../edit-drive/edit-drive.component';

@Component({
  selector: 'app-view-drive',
  templateUrl: './view-drive.component.html',
  styleUrls: ['./view-drive.component.css']
})
export class ViewDriveComponent implements OnInit {

  data:any[];
  constructor(private Ser:ServletService, private m:MatDialog) { }

  ngOnInit() {

     //this.Ser.viewdata().subscribe((e:any)=>{this.data=e});
     this.Reload();
  }

  Reload()
  {
    this.data=null;
    this.Ser.viewdata().subscribe((e:any)=>{this.data=e});
  }

  deleteData(cid)
  {
    
    this.Ser.deleteData(cid).subscribe();
    alert("Successfully Deleted");
    this.Reload();
  }

  updateDial(id)
  {
    const dial=this.m.open(EditDriveComponent,{data:{i:id}});
    dial.afterClosed().subscribe((e:any)=>{this.Reload()})
  }

}
