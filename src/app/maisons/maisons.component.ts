import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-maisons',
  templateUrl: './maisons.component.html',
  styleUrls: ['./maisons.component.css']
})
export class MaisonsComponent {
  maisons: any;
  constructor (private data:DataService){
  
  }

  ngOnInit(): void{
    this.data.getAll()
      .subscribe(
        res=>{
          this.maisons=res;
        },
        err=>{
          console.log(err);
        }
      )
  }
}
