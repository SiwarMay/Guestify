import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail-maison',
  templateUrl: './detail-maison.component.html',
  styleUrls: ['./detail-maison.component.css']
})
export class DetailMaisonComponent {
  
  id:any;
  maison:any;
  maisons: any;

  constructor(private act:ActivatedRoute , private data: DataService){}

  ngOnInit(): void{
    this.id = this.act.snapshot.paramMap.get('id');
    
    this.data.getMaisonById(this.id)
      .subscribe(
        res=>{
          this.maison = res;
        }
      )

  }
}
