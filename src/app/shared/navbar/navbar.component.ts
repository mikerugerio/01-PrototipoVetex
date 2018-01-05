import { Component } from '@angular/core';

import { AuthService } from "../services/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{

	profile: any;

	constructor (private auth:AuthService){
		auth.handleAuthentication();

		if (this.auth.userProfile) {
	      this.profile = this.auth.userProfile;
	      console.log(this.profile);
	    } else {
	      this.auth.getProfile((err, profile) => {
	        this.profile = profile;
	        console.log(this.profile);
	      });
	    }

	}

	login(){
		this.auth.login();
	}

	salir(){
		this.auth.logout();
	}
}
