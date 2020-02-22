import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from './IPhoto';

@Component({
    selector: 'pm-photo',
    templateUrl: './photo.component.html'
})
export class photoComponent implements OnInit {
    showModal: boolean;
    show() {
        this.showModal = true; // Show-Hide Modal Check

    }
    //Bootstrap Modal Close event
    hide() {
        this.showModal = false;
    }
    @Input() photo: IPhoto;
    finalPath: string;

    ngOnInit() {
        this.finalPath = 'assets/img/' + this.photo.imgSrc;

    }
}
