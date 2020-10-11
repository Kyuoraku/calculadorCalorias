import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { params } from '../params';

@Component({
    selector: 'app-height',
    templateUrl: './height.component.html',
    styleUrls: ['./height.component.scss']
})
export class HeightComponent implements OnInit {

    data: params;
    fg: FormGroup;

    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {

        this.route.params.subscribe(param => {
            this.data = JSON.parse(JSON.stringify(param))
        });

        this.fg = new FormGroup({
            height: new FormControl('')
        })
    }

    next(event) {

        this.data.height = +this.fg.controls["height"].value
        this.router.navigate(["/result", this.data])

    }

}
