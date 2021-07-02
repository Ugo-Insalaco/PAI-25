import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import {MatGridListModule} from '@angular/material/grid-list'

@Component({
  selector: 'app-capteurs',
  templateUrl: './capteurs.component.html',
  styleUrls: ['./capteurs.component.css']
})
export class CapteursComponent implements OnInit {

  constructor(
    private backend: BackendService
  ) { }

  all_iot=[];
  search: string;
  brands = []; //toutes les marques
  selected_brands = []; //les marques sélectionnées dans le filtre
  datas = []; //toutes les données mesurées par les capteurs
  selected_datas = []; //les données mesurées sélectionnées dans le filtre
  max_price = 0;
  min_price = 0;

  ngOnInit(): void {

    this.backend.GET(`/api/products`, e=>{
      for (let i = 0; i < e.data.length; i++) {
        this.all_iot.push(e.data[i])
        if (this.brands.indexOf(e.data[i].fields.brand)==-1) {
          this.brands.push(e.data[i].fields.brand)
          this.selected_brands.push(e.data[i].fields.brand) //au début, on sélectionne toutes les marques
        }
        e.data[i].fields.price = Number(e.data[i].fields.price.replace(",", "."))
        console.log(Number(e.data[i].fields.price))
        console.log(typeof(Number(e.data[i].fields.price)))
        if (e.data[i].fields.price>this.max_price) {
          this.max_price = e.data[i].fields.price  
          console.log("prix max : ")     
          console.log(this.max_price) 
        }
      }
    })


    this.backend.GET(`/api/datas`, e=>{
      for (let i = 0; i < e.data.length; i++) {
        this.datas.push(e.data[i].fields.name)
        this.selected_datas.push(e.data[i].fields.name)
      }
    })

  }


  onChangeBrand(brand){
    if (this.selected_brands.indexOf(brand) != -1) {
      // La marque a été déselectionnée, il faut la supprimer de la liste
      var index = this.selected_brands.indexOf(brand)
      this.selected_brands.splice(index, 1)
    }
    else {
      // La marque a été resélectionnée, il faut la rajouter dans la liste
      this.selected_brands.push(brand)
    }
  }

  onChangeData(data){
    if (this.selected_datas.indexOf(data) != -1) {
      var index = this.selected_datas.indexOf(data)
      this.selected_datas.splice(index, 1)
    }
    else {
      this.selected_datas.push(data)
    }
  }

  hasSelectedDatas(iot){
    //fonction qui vérifie si un iot mesure toutes les données de selected_datas
    
    //parcourir selected-datas puis iot.fields.machin et des qu'il y a un qui manque renvoyer false, à la fin renvoyer true
  }


}
