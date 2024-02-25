import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent {
  isCollapsed = true;

  constructor(private router: Router){}

  logout(){
    localStorage.clear()
    this.router.navigate(['']);
  }
}
