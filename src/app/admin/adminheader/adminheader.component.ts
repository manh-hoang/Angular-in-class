import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from 'src/app/product.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
user:any='';
userName:any='';

listAccount: any[] = [localStorage.getItem('account')];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.listAccount[0]);
    this.userName = this.user.name ;
  }


  logout(){
    localStorage.removeItem("account");
    this.router.navigate(['']);
  }

}
