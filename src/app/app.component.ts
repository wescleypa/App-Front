import { Component } from '@angular/core';
import { Router    } from '@angular/router';
import   axios       from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private router: Router
  ) {}

  title = 'Wallet-Project';

  async ngOnInit() {
    if(!localStorage.getItem('userID')) this.router.navigate(['login']);
    
    // CHECK ACCESS MODULES
    let length = window.location.href.split('/');
    let modulo = length[length.length-1];
    console.log(localStorage.getItem('modules'));
    let m:any = localStorage.getItem('modules');
    let ml    = 0;
    if(m?.includes(',')){
      ml = m.split(',').length;
      m = localStorage.getItem('modules')?.split(',');
    }

    let access = 0;
    for(let i=0; i<ml; i++) {
      if(modulo === 'login' || modulo === 'logout') access = 1;
      if(m[i] == modulo) access++;
    }

    if(access <= 0) this.router.navigate(['']);
  }
}
