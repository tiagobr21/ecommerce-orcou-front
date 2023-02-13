import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-ecommerce',
  templateUrl: './header-ecommerce.component.html',
  styleUrls: ['./header-ecommerce.component.css']
})
export class HeaderEcommerceComponent implements OnInit {
  
  opacity:string ='0'
  condicional:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  mudarOpacity(){
    this.condicional = !this.condicional
    if(this.condicional == true){
      this.opacity = '1'
    }else{
      this.opacity = '0'
    }
  }

}
