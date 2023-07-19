import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{

  constructor(
    private router: Router) { }

  m1(){
    this.router.navigate(['team']);
  }

  m2(){
    this.router.navigate(['demo-component']);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
