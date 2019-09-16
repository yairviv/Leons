import { Component } from '@angular/core';
import {IPhoto} from '../IPhoto';


@Component({
    styleUrls:['photosAtmos.component.css'],
   templateUrl: './photosAtmos.component.html'
})
export class photosAtmosComponent {


    photosArray: IPhoto[];


constructor(){

	this.photosArray =  [

        { id: "20170709_213856", imgSrc: "atmos_album/20170709_213856.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "20180608_114813", imgSrc: "atmos_album/20180608_114813.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_3622", imgSrc: "atmos_album/DSC_3622.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_3480", imgSrc: "atmos_album/DSC_3480.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_3483", imgSrc: "atmos_album/DSC_3483.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_3495", imgSrc: "atmos_album/DSC_3495.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_3504", imgSrc: "atmos_album/DSC_3504.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_3625", imgSrc: "atmos_album/DSC_3625.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_3629", imgSrc: "atmos_album/DSC_3629.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_3627", imgSrc: "atmos_album/DSC_3627.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_0108", imgSrc: "atmos_album/DSC_0108.jpg" , imgTitleText: 'לחץ להגדלה' },
        { id: "DSC_0098 (2)", imgSrc: "atmos_album/DSC_0098.jpg" , imgTitleText: 'לחץ להגדלה' },
    
    
    
    ];
}
}
