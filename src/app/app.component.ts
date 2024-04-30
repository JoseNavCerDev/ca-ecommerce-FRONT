import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  NgbdOffcanvasOptions } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbdOffcanvasOptions,
    CardsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ca-ecommerce';
}
