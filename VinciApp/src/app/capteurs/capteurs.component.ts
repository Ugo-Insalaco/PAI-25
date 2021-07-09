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

  all_iot=[]; //tous les produits
  selected_iot =[] //produits qui passent le filtre et la recherche
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
        this.selected_iot.push(e.data[i]) //au début, on sélectionne tous les iot
        if (this.brands.indexOf(e.data[i].fields.brand)==-1) {
          this.brands.push(e.data[i].fields.brand)
          this.selected_brands.push(e.data[i].fields.brand)
        }
        e.data[i].fields.price = Number(e.data[i].fields.price.replace(",", "."))
        if (e.data[i].fields.price>this.max_price) {
          this.max_price = e.data[i].fields.price
        }
      }
      this.brands = this.brands.sort()
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
    this.updateSelectedIot()
  }

  onChangeData(data){
    if (this.selected_datas.indexOf(data) != -1) {
      var index = this.selected_datas.indexOf(data)
      this.selected_datas.splice(index, 1)
    }
    else {
      this.selected_datas.push(data)
    }
    this.updateSelectedIot()
  }

  hasSelectedData(iot){
    //fonction qui vérifie si un iot a au moins 1 donnée de selected_datas
    for (let i = 0; i < this.selected_datas.length; i++) {
      for (let j = 0; j < iot.included.data.length; j++) {
        if(this.selected_datas[i] == iot.included.data[j].name_data) {
          return true
        }
      }
    }
    return false
  }

  updateSelectedIot(){
    this.selected_iot=[]
    for (let i = 0; i < this.all_iot.length; i++) {
      if (this.selected_brands.indexOf(this.all_iot[i].fields.brand) != -1
          && this.all_iot[i].fields.price > this.min_price-1
          && this.max_price+1 > this.all_iot[i].fields.price
          && (this.search == undefined 
            || this.all_iot[i].fields.brand.toLowerCase().includes(this.search.toLowerCase()) 
            || this.all_iot[i].fields.name.toLowerCase().includes(this.search.toLowerCase()) 
            || this.all_iot[i].fields.ref_dataprint.toLowerCase().includes(this.search.toLowerCase()))
          && this.hasSelectedData(this.all_iot[i])
      ) {
        this.selected_iot.push(this.all_iot[i])
      }
    }
  }

}
