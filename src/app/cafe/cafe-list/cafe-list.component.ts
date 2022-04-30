import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe'
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = []
  totalCafeOrigen = 0;
  totalCafeBlend = 0;
  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
     this.totalCafeOrigen = cafes.filter(cafe => cafe.tipo == 'Café de Origen').length;
     this.totalCafeBlend = cafes.filter(cafe => cafe.tipo == 'Blend').length;
    } )
  }


  ngOnInit() {
    this.getCafes();

  }

}
