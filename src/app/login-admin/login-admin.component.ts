import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { account, ProductService } from '../product.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  listAccount: account[] = [];
  constructor(private fb: FormBuilder, private accoubtSv: ProductService ,private router:Router) { }
  inforForm = this.fb.group({

    "email": [null],
    "password": [null],

  });
  ngOnInit(): void {
    this.getListAccount();
  };
  login() {
    // console.log(this.listAccount[0].email);
    // console.log(this.listAccount[0].password);

    let password = this.inforForm.value.password;
    let email = this.inforForm.value.email;


    for (let i = 0; i < this.listAccount.length; i++) {
      console.log(this.listAccount[i])
      if (password != this.listAccount[i].password) {
        alert('Back check email and password');
        return;
      }
      if (email != this.listAccount[i].email) {
        alert('Back check email and password');
        return;
      }
      else {
        alert(`Hello ${this.listAccount[i].name}`);
        localStorage.setItem("account", JSON.stringify(this.listAccount[i]));
        this.router.navigate(['admin']);
        return;
      }




    }




  };
  getListAccount() {
    this.accoubtSv.getListAccount().subscribe((res: any) => {
      this.listAccount = res;

    });
  }



}
