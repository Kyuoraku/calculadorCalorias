import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { params } from '../params';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    data: params;
    TMB: number;


    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(param => {
            this.data = JSON.parse(JSON.stringify(param))
            console.log("Result got the data: ", this.data)
        });
        this.TMB = this.calculateTMB()


    }

    calculateTMB() : number{
        let formula;
        if(this.data.gender === "H"){
            return Math.round(((this.data.weight*10) + (this.data.height * 6.25) - (this.data.age * 5) + 5) *1.2)
        }else{
            return Math.round(((this.data.weight*10) + (this.data.height * 6.25) - (this.data.age * 5) - 161) *1.2)
        }
    }

}
