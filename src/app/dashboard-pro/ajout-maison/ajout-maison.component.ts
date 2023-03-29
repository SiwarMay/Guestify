import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ajout-maison',
  templateUrl: './ajout-maison.component.html',
  styleUrls: ['./ajout-maison.component.css']
})
export class AjoutMaisonComponent {
    maison: any = {
      nom:'',
      prix:'',
      description:'',
      tele:'',
      surface:'',
      adresse:'',
      chambres:'',
      salledebain:'',
      garage:'',
      gouvernerat:'',
      caracteristiques: [],
    };

    
    constructor(private _auth: AuthService, private data: DataService, private router: Router){}
    
    caracteristique: any = '';
    
    image: File[] = [];

    select(event: any):void{
      this.image = event.target.files;    
    }

    ngOnInit(): void{}

    create(){
        let fd =  new FormData();
        fd.append('nom', this.maison.nom);
        fd.append('prix', this.maison.prix);
        fd.append('description', this.maison.description);
        fd.append('tele', this.maison.tele);
        fd.append('surface', this.maison.surface);
        fd.append('adresse', this.maison.adresse);
        fd.append('chambres', this.maison.chambres);
        fd.append('salledebain', this.maison.salledebain);
        fd.append('gouvernerat', this.maison.gouvernerat);
        fd.append('garage', this.maison.garage);
        fd.append('caracteristiques', this.maison.caracteristiques);
        fd.append('iduser',this._auth.getAuthorDataFromToken()._iduser);
       
       
        for (let i = 0; i < this.image.length; i++) {
          fd.append('images', this.image[i], this.image[i].name);
        }
     
        this.data.create(fd)
          .subscribe(
            res=>{
                this.router.navigate(['/home']);
            },
            err=>{
              console.log(err);
            }
          );
    }
}


