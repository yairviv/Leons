import { Component } from '@angular/core';
import {IPhoto} from '../IPhoto';

@Component({
	styleUrls:['photosFood.component.css'],
   templateUrl: './photosFood.component.html'
})
export class photosFoodComponent {

photosArray: IPhoto[];


constructor(){

	this.photosArray = [

		{ id: "img3659", imgSrc: "small_album/DSC_3659.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img0082", imgSrc: "small_album/DSC_0082.JPG" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img0083", imgSrc: "small_album/DSC_0083.JPG" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3538", imgSrc: "small_album/DSC_3538.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3610", imgSrc: "small_album/DSC_3610.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3633", imgSrc: "small_album/DSC_3633.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3636", imgSrc: "small_album/DSC_3636.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3642", imgSrc: "small_album/DSC_3642.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3648", imgSrc: "small_album/DSC_3648.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3657", imgSrc: "small_album/DSC_3657.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3661", imgSrc: "small_album/DSC_3661.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3663", imgSrc: "small_album/DSC_3663.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3665", imgSrc: "small_album/DSC_3665.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3667", imgSrc: "small_album/DSC_3667.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3669", imgSrc: "small_album/DSC_3669.jpg" , imgTitleText: 'לחץ להגדלה' },
		{ id: "img3671", imgSrc: "small_album/DSC_3671.jpg" , imgTitleText: 'לחץ להגדלה' },
	
	];
}


}
