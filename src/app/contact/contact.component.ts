import { Component } from '@angular/core';

@Component({
	styleUrls:['contact.component.css'],
   templateUrl: './contact.component.html'
})
export class contactComponent {

    contactHeader: string;
    contactBody: string;

    enterName: string;
    enterEmail:string;
    enterPhone: string;
    enterText:string;
    sendButtonText:string;
    ifRequired:string;

constructor(){

    this.contactHeader = 'צור קשר';
    this.contactBody = 'Name: החצר של ליאון' + '\n' + 'Addresse: ירושלים 151, אזור' + '\n' + 'E-mail: yairviv@gmail.com' + '\n' + 'Phone: 0542152157';  
   
}

}
