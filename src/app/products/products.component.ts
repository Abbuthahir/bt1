import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
selectedProduct: any;
searchQuery: string = '';
filteredProducts: any[] = [];

  products = [
    {
      name: 'Television',
      image: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVsZXZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: 22000,
      description: 'Buy your Television',
      isHovered: false,
    },
    {
      name: 'Mobile',
      image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      price: 85000,
      description: 'Buy your Mobile',
      isHovered: false
    },
    {
      name: 'Headphone',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      price: 8000,
      description: 'Buy your Headphone',
      isHovered: false
    },
    {
      name: 'Smart Watch',
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: 12000,
      description: 'Buy your smart watch',
      isHovered: false
    }
  ]

  showProductDetails(product: any) {
    // this.selectedProduct = product;
    console.log(product); 
  }
  filterProducts() {
    this.filteredProducts = [];
    this.products.forEach((product) => {
      if (product.name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
        this.filteredProducts.push(product);
      }
    });
  }
  
}
