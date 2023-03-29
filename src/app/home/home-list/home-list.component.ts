import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],

})
export class HomeListComponent {
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
