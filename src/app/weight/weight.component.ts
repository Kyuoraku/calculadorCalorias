import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { params } from '../params';

@Component({
    selector: 'app-weight',
    templateUrl: './weight.component.html',
    styleUrls: ['./weight.component.scss']
})
export class WeightComponent implements OnInit {

    data: any;
    fg: FormGroup;

    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        //se recuperan los parametros
        this.route.params.subscribe(param => {
            this.data = JSON.parse(JSON.stringify(param))
        });

        this.fg = new FormGroup({
            weight: new FormControl('')
        })
    }

    next(event) {
        this.data.weight = +this.fg.controls["weight"].value
        this.router.navigate(["/age",this.data])
    }

}
