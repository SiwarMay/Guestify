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
      //gouvernerat:'',
      //caracteristiques:[],
    }


    image:any;


    select(e: any){
      this.image = e.target.files[0];
    }


    constructor(private _auth: AuthService, private data: DataService, private router: Router){}
      ngOnInit(): void{
        
      }
      create(){
        let fd =  new FormData()
        fd.append('nom', this.maison.nom)
        fd.append('prix', this.maison.prix)
        fd.append('description', this.maison.description)
        fd.append('tele', this.maison.tele)
        fd.append('surface', this.maison.surface)
        fd.append('adresse', this.maison.adresse)
        fd.append('chambres', this.maison.chambres)
        fd.append('salledebain', this.maison.salledebain)
        fd.append('garage', this.maison.garage)
        fd.append('image', this.image)
        fd.append('iduser',this._auth.getAuthorDataFromToken()._iduser)


        this.data.create(fd)
          .subscribe(
            res=>{
                this.router.navigate(['/home'])
            },
            err=>{
              console.log(err);
            }
          )
      }


    }
