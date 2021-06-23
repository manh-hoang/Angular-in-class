import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountAc: ProductService, private acRouter: ActivatedRoute) { }
  inforForm = this.fb.group({
    "id":[null],
    "name": [null],
    "email": [null],
    "password": [null],
    "role": [null],

  });

  ngOnInit(): void {
    let id = this.acRouter.snapshot.params.id;
    console.log(id);
    this.accountAc.getAccountId(id).subscribe((res) => {
      this.inforForm = this.fb.group({
        "id":[`${res.id}`],
        "name": [`${res.name}`],
        "email": [`${res.email}`],
        "password": [`${res.password}`],
        "role": [`${res.role}`],

      });
    })
  }
  update() {
    let id = this.acRouter.snapshot.params.id;
    this.accountAc.updateAccount(id, this.inforForm.value).subscribe((res) => {
      alert('Uppdate finish');
      location.href = "/add-account"
    });
  }
}
