import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {params} from '../params';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedValue(event){
    console.log("Pagina gender: se seleccionó ",event)
    let data = new params()
    data.gender = event;
    console.log("Gender: parandole ", data, "a weight.")
    this.router.navigate([`/weight`, data])
  }

}
