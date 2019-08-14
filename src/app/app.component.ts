import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular02';
  constructor(private router: Router ){}
  Menu1(){
    this.router.navigate(["menu1"]);
  }
  Menu2(){
    this.router.navigate(["menu2"]);
  }
  Menu3(){
    this.router.navigate(["menu3"]);
  }
  
  
}
