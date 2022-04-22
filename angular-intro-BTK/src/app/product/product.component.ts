import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<div style="text-align: center;"><p>{{name}}</p></div>`, //!!! Genel olarak templateUrl kullanılır. Karmaşıklık olmasın diye !!!
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  name = "Laptop"

  ngOnInit(): void {
  }

}
