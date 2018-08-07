import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServerService } from '../serverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  userToken = localStorage.getItem('userToken');
  constructor(private serverService: ServerService, private router: Router, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
  }
  adminLogin() {
    if (this.email === 'ajaykumar@123.com' && this.password === 'abc') {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('');
    }
  }
}
