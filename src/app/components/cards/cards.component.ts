import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductsInterface } from '../../interfaces/producr.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  constructor(
    private productService : ProductsService
  ){}

  productList : ProductsInterface[]=[];

  ngOnInit(): void {
    this.getProducts();
    throw new Error('Method not implemented.');
  }

  getProducts(){
    this.productService.GetProducts().subscribe({
      next: (result) => {
        console.log(result)
        //this.productList = result.products;
      },
      error: (error) => {
        console.error("Bad request !!");
      }
    })
  }
  
}
