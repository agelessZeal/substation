import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: true,
        navSpeed: 700,
        navText: ['Prev', 'Next'],
        items: 1,
        nav: true,
        smartSpeed: 1000,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            }
        }
    };

    constructor() {
    }

    ngOnInit() {
    }

}
