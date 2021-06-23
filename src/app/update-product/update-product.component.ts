import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { product, ProducttrueService } from '../producttrue.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  listProduct: product[] = [];
  constructor(private fb: FormBuilder, private productSv: ProducttrueService, private acRouter: ActivatedRoute) { }

  inforForm = this.fb.group({
    "id":[null],
    "name": [null],
    "price": [null],
    "sale_price": [null],
    "image": [null],
    "category_id": [null],
    "status": [null],
    "description": [null],


  });
  ngOnInit(): void {
    let id = this.acRouter.snapshot.params.id;
    console.log(id);
    this.productSv.getProductId(id).subscribe((res) => {
      this.inforForm = this.fb.group({
        "id":[`${res.id}`],
        "name": [`${res.name}`],
        "price": [`${res.price}`],
        "sale_price": [`${res.sale_price}`],
        "image": [`${res.image}`],
        "category_id": [`${res.category_id}`],
        "status": [`${res.status}`],
        "description": [`${res.description}`],
      });
    })
  }

  update() {
    let id = this.acRouter.snapshot.params.id;
    this.productSv.updateProduct(id, this.inforForm.value).subscribe((res) => {
      alert('Uppdate finish');
      location.href = "/add-product"
    });

  }


}
