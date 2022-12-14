import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private activationRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  onLogin() {
    this.route.navigate(['home'], { relativeTo: this.activationRoute });
  }

  onCancel() {}

  onRecuover() {}
}
