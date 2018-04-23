import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stark-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    public imgSrc: string = '../../assets/hover-logo.png';

    constructor() { }

    ngOnInit() {
    }

    public onMouseOver(): void {
        this.imgSrc = '../../assets/hover-logo.png';
    }

    public onMouseOut(): void {
        this.imgSrc = '../../assets/logo.png';
    }

}
