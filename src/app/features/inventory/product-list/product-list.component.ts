import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];

  ngOnInit(): void {
  }

  onSearch(query: string): void {
  }

  viewProduct(id: number): void {
  }

  editProduct(id: number): void {
  }

  deleteProduct(id: number): void {
  }
}
