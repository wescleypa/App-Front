import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  constructor(
      private toastr: ToastrService
    , private router: Router
  ){ }

  ngOnInit(): void {
    this.toastr.success('This is a success message', 'Tada');

    if(localStorage.getItem('userID')) this.router.navigate(['']);
  }

  async login(){
    try {
    
    let user = (document.getElementById('email')    as HTMLInputElement).value;
    let pass = (document.getElementById('password') as HTMLInputElement).value;
    await axios.post('http://localhost:3000/login', {user, pass})
    .then((data) => {
      localStorage.setItem('user'    , user                );
      localStorage.setItem('name'    , data?.data?.name    );
      localStorage.setItem('lastname', data?.data?.lastname);
      localStorage.setItem('userID'  , data?.data?.id      );
      this.getModules(data?.data?.id);
      //this.router.navigate(['']);
    });

    } catch(error) { 
      console.log(error);
      localStorage.setItem('userID', 'null');
    }
  }

  // ###### GET MODULES USER ######
  async getModules(userID:any) {
    try {
      let m:any = [];
      await axios.post('http://localhost:3000/getModules', {userID})
        .then((response) => {
          for(let i=0; i<response?.data.length; i++) {
            m.push(response?.data[i]?.route);
          }
          localStorage.setItem('modules', m);
          this.router.navigate(['']);
        })
    } catch(error:any) {
      console.log(error);
      if(error?.response?.data?.message === 'Not modules') {
        localStorage.clear();
        alert("You don't have access to system");
      }
    }
  }
  
}
