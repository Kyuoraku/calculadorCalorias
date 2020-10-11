import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { params } from '../params';

@Component({
    selector: 'app-age',
    templateUrl: './age.component.html',
    styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

    data: params;
    fg: FormGroup;
    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {

        this.fg = new FormGroup({
            age: new FormControl(null, Validators.required)
        })

        this.route.params.subscribe(param => {
            this.data = JSON.parse(JSON.stringify(param))
            console.log("Age got the data: ",this.data)
        });


    }

    next(event){
        this.data.age = +this.fg.controls["age"].value
        this.router.navigate(["/height",this.data])
    }

}
