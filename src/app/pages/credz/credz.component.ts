import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import   axios               from 'axios';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-credz',
  templateUrl: './credz.component.html',
  styleUrls: ['./credz.component.scss']
})
export class CredzComponent implements OnInit {
  public registered:boolean = false;

  private length = window.location.href.split('/');
  private modulo = this.length[this.length.length-1];
  private userID = localStorage.getItem('userID');

  public balance:any;
  public cards  :any;

  socket:any;
  constructor(
    private router       : Router
  ) { }

  ngOnInit(): void { 
    this.getData();
   }

    // ###### GET DATA ######
  async getData() {

    if( this.userID === null) this.router.navigate(['login']);
    let userID = this.userID,
        modulo = this.modulo;
    try {
      await axios.post('http://localhost:3000/getBank', {userID, modulo})
          .then((response) => {
            console.log(response?.data)
            this.registered = true;

            this.socket = io("http://localhost:3000", {
                query : [
                    `${modulo}`
                  , `${userID}`
                ]
            });
            this.socket.on('balance', (data: string) => {
              this.balance = data;
            });

            this.socket.on('cards', (data: string) => {
              this.cards = data;
            });

          });
    } catch(error:any) {
      console.log(error);
      if(error?.response?.data?.message === "Don't have registered") this.registered = false
    }
  }
}
