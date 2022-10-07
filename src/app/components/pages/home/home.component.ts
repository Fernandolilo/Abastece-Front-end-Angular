import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: Router,
    private activationRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onEmpresa(){
    this.route.navigate(['empresa']);
    console.log(navigator)
  }
}
